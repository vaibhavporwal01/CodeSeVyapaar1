const express = require('express')
const app = express()
const dotenv =require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const connection =require("./DataBase/dbConnection")
const middlewareError = require('./middleware/errorHandler')
const userRouter = require("./controllers/usercontroller")
const sellerRouter = require("./controllers/sellercontroller")
const { removeUnverifiedAccounts } = require('./authomation/removedUnverifiedData')


dotenv.config({path : './config/.env'})


app.use (cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET" , "POST" , "PUT" , "PATCH" , "DELETE" , "UPDATE"],
    credentials:true,
})
)

app.use(cookieParser())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))



app.use("/api/v1/user" , userRouter)
app.use("/api/v1/seller" , sellerRouter)



connection()
removeUnverifiedAccounts()

app.use(middlewareError)

module.exports =app 