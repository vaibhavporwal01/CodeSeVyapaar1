
const mongoose = require('mongoose')
const connection = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        dbName: "K_Kart"
    }).then(() =>{
        console.log("Database connect successfully")
    })
    .catch((err) => {
        console.log("Error occurs during connecting database")
        console.log(err)
    })
}
module.exports = connection