const app = require('./app')




const server =  app.listen(process.env.PORT , () => {
    console.log(`server is listen on http://localhost:${process.env.PORT}`) 
})
 
