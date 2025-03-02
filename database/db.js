const mongoose=require("mongoose")

const dbconnection=()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("data base connected")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=dbconnection