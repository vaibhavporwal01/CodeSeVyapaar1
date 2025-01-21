const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto=require('crypto')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name!"],
      },
      email:{
        type: String,
        required: [true, "Please enter your email!"],
      },
    password :{
        type:String,
        minLenght:(7 , "password must have 8 characters"),
        maxLenght:(18 , "password cannot have more then 8 characters"),
        require:true,
        select:false,
    },
    phone :{
        type: String,
        required: [true, "Please enter your number!"],
    },
    addresses:[
        {
          country: {
            type: String,
          },
          city:{
            type: String,
          },
          address1:{
            type: String,
          },
          address2:{
            type: String,
          },
          zipCode:{
            type: Number,
          },
          addressType:{
            type: String,
          },
        }
      ],
      role:{
        type: String, 
        default: "user",
      },
      avatar:{
        public_id: {
          type: String,
          
        },
        url: {
          type: String,
          
        },
     },
      
     
     accountVerified:{ type: Boolean , default:false},

     verificationCode: {type: Number},
     verificationCodeExpire: Date,
     resetPasswordToken: String,
     resetPasswordExpire: Date,
     createdAt:{
        type:Date,
        default:Date.now,
     }

})

userSchema.pre("save" ,async function (next) {
    if(!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password , 10)
})

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password)
}
userSchema.methods.generateVerificationCode = function() {
    function generateRandomFiveDigitNumber(){
        const firstDigit = Math.floor(Math.random()*9) + 1
        const remainingDigits =Math.floor(Math.random() *10000)
        .toString()
        .padStart(4 , 0)

        return parseInt(firstDigit+remainingDigits)
    }

    const verificationCode = generateRandomFiveDigitNumber();
    this.verificationCode = verificationCode;
    this.verificationCodeExpire = Date.now() + 10 * 60 * 1000;

    return verificationCode
}

userSchema.methods.generateToken = async function(){
    return await jwt.sign({id:this._id} , process.env.JWT_SECRET_KEY ,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

userSchema.methods.generateResetPasswordToken=function(){
    const resetToken =crypto.randomBytes(20).toString("hex")

    this.resetPasswordToken =crypto.createHash('sha256').digest('hex')

    this.resetPasswordExpire=Date.now() +15*60*1000

    return resetToken
}

module.exports =mongoose.model("User" ,userSchema)