const express=require('express')
const router = express.Router()
const cloudinary = require("cloudinary");
const ErrorHandler =require("../utils/errorHandler")
const catchAsyncError=require("../middleware/catchAsyncError")
const Seller =require("../Models/sellerModel")
const sendEmail = require("../utils/sendEmail")
const twilio = require("twilio")
const sendToken = require("../utils/sendToken")
const isAuthenticated = require('../middleware/auth')
const crypto=require('crypto')

const client = twilio("ACa0dc2dfc57612c2c6d2e30606418ca81" , "a1af406fe62161405d13ec7bf9c18e42" )

router.post("/register" , catchAsyncError(async (req,res,next) => {
    try{
        const {name , email , phone , password , verificationMethod , address ,zipCode   } = req.body
        if(!name || !email || !phone  || !password  || !verificationMethod || !address || !zipCode ){
            return next(new ErrorHandler("All field are required" ,400))
        }
        function validatePhone(phone) {
            const phoneRegex = /^\+91\d{10}$/
            return phoneRegex.test(phone) 
        }
        if(!validatePhone(phone)){
            return next(new ErrorHandler("Invalid phone Number" ,400))
        }

        const existingSeller = await Seller.findOne({
            $and:[{
                email,
                acccountVerified:true
            },
        {
            password,
            accountVerified:true
        }]
        })
        if(existingSeller){
            return next(new ErrorHandler("Number or Email already used" , 400))
        }

        const registerationAttemptsBySeller = await Seller.find({
            $and:[
                {phone , accountVerified:false},
                {email , accountVerified:false}
            ]
        })

        if(registerationAttemptsBySeller.length >5) {
            return next(new ErrorHandler(
                "You have exceeded the maximum number of attemps(5) please try again after 1 hour." ,
                400
            )
           )
        }
       
        const sellerData ={
            name,
            email,
            phone,
            password,
            zipCode,
            address,
           
        }

        const seller = await Seller.create(sellerData)
        const verificationCode =await seller.generateVerificationCode()
        await seller.save()
        
        sendVerificationCode(verificationMethod , verificationCode , email , phone ,res)
        console.log(Seller)
        console.log(seller)
    
    }
    catch(error){
        console.log(error)
        next(error)
    }
}))



async function sendVerificationCode(verificationMethod , verificationCode , email , phone ,res){
   
    try {
        if(verificationMethod==="email"){
            const message = generateEmailTemplateSeller(verificationCode)
            sendEmail({email , subject:"Your Verification Code" , message})
            res.status(200).json({
                success:true,
                message:"verification code send successfully to your email"
            })
        } else if (verificationMethod === "text_message") {
            
            await client.messages.create({
              body: `Your verification code is ${verificationCode}.`,
              from: process.env.TWILIO_PHONE_NUMBER,
              to: phone,
            });
            res.status(200).json({
              success: true,
              message: `OTP sent.`,
            });
        } else if (verificationMethod === "phone") {
            const verificationCodeWithSpace = verificationCode 
              .toString()
              .split("")
              .join(" ");
              console.log("")
            await client.calls.create({
                twiml: `<Response><Say>Your verification code is ${verificationCodeWithSpace}. Your verification code is ${verificationCodeWithSpace}.</Say></Response>`,
              from: process.env.TWILIO_PHONE_NUMBER,
              to: phone,
            });
            res.status(200).json({
              success: true,
              message: `Calling....`,
            });
      
        }else {
            return res.status(500).json({
                success:false,
                message:"Invalid verification methods"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"verification code failed to send"
        })
    }
    
}

function generateEmailTemplateSeller(verificationCode) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #4CAF50; text-align: center;">Verification Code</h2>
        <p style="font-size: 16px; color: #333;">Dear Seller,</p>
        <p style="font-size: 16px; color: #333;">Your verification code is:</p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="display: inline-block; font-size: 24px; font-weight: bold; color: #4CAF50; padding: 10px 20px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #e8f5e9;">
            ${verificationCode}
          </span>
        </div>
        <p style="font-size: 16px; color: #333;">Please use this code to verify your email address. The code will expire in 10 minutes.</p>
        <p style="font-size: 16px; color: #333;">If you did not request this, please ignore this email.</p>
        <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #999;">
          <p>Thank you,<br>CodeseVaPar</p>
          <p style="font-size: 12px; color: #aaa;">This is an automated message. Please do not reply to this email.</p>
        </footer>
      </div>
    `;
  }

  router.post("/otp-verification", catchAsyncError(async (req, res, next) => {
    const { email, otp, phone } = req.body;

    // Validate phone number format
    function validatePhoneNumber(phone) {
        const phoneRegex = /^\+91\d{10}$/;
        return phoneRegex.test(phone);
    }

    if (!validatePhoneNumber(phone)) {
        return next(new ErrorHandler("Invalid phone number.", 400));
    }

    try {
        // Fetch seller data with email or phone number
        const sellerAllEntries = await Seller.find({
            $and: [
                { email, accountVerified: false },
                { phone, accountVerified: false }
            ]
        }).sort({ createdAt: -1 });

        // Check if no seller is found
        if (!sellerAllEntries || sellerAllEntries.length === 0) {
            return next(new ErrorHandler("seller not found.", 404));
        }

        let seller;

        if (sellerAllEntries.length > 1) {
            seller = sellerAllEntries[0];
            await Seller.deleteMany({
                _id: { $ne: seller._id },
                $and: [
                    { phone, accountVerified: false },
                    { email, accountVerified: false }
                ]
            });
        } else {
            seller = sellerAllEntries[0];
        }

        // OTP validation
        if (seller.verificationCode !== Number(otp)) {
            return next(new ErrorHandler("Invalid OTP.", 400));
        }

        // Check if OTP has expired
        const currentTime = Date.now();
        const verificationCodeExpire = new Date(seller.verificationCodeExpire).getTime();

        if (currentTime > verificationCodeExpire) {
            return next(new ErrorHandler("OTP Expired.", 400));
        }

        // Mark seller as verified
        seller.accountVerified = true;
        seller.verificationCode = null;
        seller.verificationCodeExpire = null;

        await seller.save({ validateModifiedOnly: true });

        sendToken(seller, 200, "Account Verified.", res);
    } catch (error) {
        console.error("Error during OTP verification:", error);
        return next(new ErrorHandler("Internal Server Error.", 500));
    }
}));


router.post("/login" , catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler("Email and password are required.", 400));
    }
    const seller = await Seller.findOne({ email, accountVerified: true }).select(
      "+password"
    );
    if (!seller) {
      return next(new ErrorHandler("Invalid email or password.", 400));
    }
    const isPasswordMatched = await seller.comparePassword(password);
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password.", 400));
    }
    sendToken(seller, 200, "seller logged in successfully.", res);
  }))


  router.get("/logout", isAuthenticated , catchAsyncError(async (req, res, next) => {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged out successfully.",
      });
  }))


  router.get("/me" , isAuthenticated , catchAsyncError(async (req, res, next) => {
    const seller = req.seller;
    res.status(200).json({
      success: true,
      seller,
    });
  }))
  router.post("/password/forgot", catchAsyncError(async (req, res, next) => {
    const seller = await Seller.findOne({
      email: req.body.email,
      accountVerified: true,
    });
    if (!seller) {
      return next(new ErrorHandler("seller not found.", 404));
    }
    const resetToken = seller.generateResetPasswordToken();
    await seller.save({ validateBeforeSave: false });
    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
  
    const message = `Your Reset Password Token is:- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore it.`;
  
    try {
      sendEmail({
        email: seller.email,
        subject: "MERN AUTHENTICATION APP RESET PASSWORD",
        message,
      });
      res.status(200).json({
        success: true,
        message: `Email sent to ${seller.email} successfully.`,
      });
    } catch (error) {
      seller.resetPasswordToken = undefined;
      seller.resetPasswordExpire = undefined;
      await seller.save({ validateBeforeSave: false });
      return next(
        new ErrorHandler(
          error.message ? error.message : "Cannot send reset password token.",
          500
        )
      );
    }
  }))

  router.put("/password/reset/:token" , catchAsyncError(async (req, res, next) => {
    const { token } = req.params;
    const resetPasswordToken =crypto.createHash('sha256').digest('hex')
    const seller = await Seller.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!seller) {
      return next(
        new ErrorHandler(
          "Reset password token is invalid or has been expired.",
          400
        )
      );
    }
  
    if (req.body.password !== req.body.confirmPassword) {
      return next(
        new ErrorHandler("Password & confirm password do not match.", 400)
      );
    }
  
    seller.password = req.body.password;
    seller.resetPasswordToken = undefined;
    seller.resetPasswordExpire = undefined;
    await seller.save();
  
    sendToken(seller, 200, "Reset Password Successfully.", res);
  }))
    module.exports=router

