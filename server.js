const express=require("express")

const app=express()
app.use(express.json())

app.get("/item",(req,res)=>{
    res.status(200).json({message:"Data Send Successfully"})
})

module.exports=app