const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto=require('crypto')

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your shop name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your shop email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password should be greater than 6 characters"],
    select: false,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter your number!"],
  },
  role: {
    type: String,
    default: "Seller",
  },
  avatar: {
    public_id: {
      type: String,
      
    },
    url: {
      type: String,
      
    },
  },
  zipCode: {
    type: Number,
    required: true,
  },
  withdrawMethod: {
    type: Object,
  },
  availableBalance: {
    type: Number,
    default: 0,
  },
  transections: [
    {
      amount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        default: "Processing",
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      updatedAt: {
        type: Date,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
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
});

shopSchema.pre("save" ,async function (next) {
    if(!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password , 10)
})

shopSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password)
}
shopSchema.methods.generateVerificationCode = function() {
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

shopSchema.methods.generateToken = async function(){
    return await jwt.sign({id:this._id} , process.env.JWT_SECRET_KEY ,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

shopSchema.methods.generateResetPasswordToken=function(){
    const resetToken =crypto.randomBytes(20).toString("hex")

    this.resetPasswordToken =crypto.createHash('sha256').digest('hex')

    this.resetPasswordExpire=Date.now() +15*60*1000

    return resetToken
}



module.exports = mongoose.model("Seller", shopSchema); 
