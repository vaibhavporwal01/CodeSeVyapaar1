const catchAsyncError=require("./catchAsyncError")
const ErrorHandler = require("../utils/errorHandler")
const jwt = require("jsonwebtoken")
const User=require("../Models/userModel")

const isAuthenticated = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorHandler("User is not authenticated.", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  
    req.user = await User.findById(decoded.id);
  
    next();
  })

  module.exports = isAuthenticated