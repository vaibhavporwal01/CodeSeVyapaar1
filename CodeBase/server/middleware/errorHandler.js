const ErrorHandler = require("../utils/errorHandler")

const middlewareError =(err , req ,res, next) => {
    err.statusCode=err.statusCode || 500
    err.message=err.message || "Internal Server Error"

    // wrong mongodb id error

    if(err.name === "CastError"){
        const message = `Resources not found with this id . Invalid ${err.path}`
        err = new ErrorHandler(message , 400)
    }

    //Duplicate Key error
    if(err.code ===11000){
        const message =`duplicate Key ${Object.keys(err.keyvalue)} Entered `
        err= new ErrorHandler(message , 400)
    }

    //wrong jwt error
    if(err.name==="JsonWebTokenError"){
        const message = `Your url is invalid please try again letter`
        err= new ErrorHandler(message ,400)
    }
    //jwt expired
    if(err.name === "TokenExpiredError"){
        const message='Your seasion is expired please try again letter'
        const err = new ErrorHandler(message ,400)
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    })
}

module.exports =middlewareError