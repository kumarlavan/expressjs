const express=require("express")
require("dotenv").config();
const cors = require("cors");
const dbconnection = require("./database/db");
const { Employee } = require("./models/employes");
const app=express()
app.use(express.json())
app.use(cors())

//! database connection
dbconnection()





app.get("/item",(req,res)=>{
    res.status(200).json({message:"Data Send Successfully"})
})
app.get("/products",(req,res)=>{
    const data= fetch("https://api.github.com/users")
    data.then((response)=>{
       const user= response.json()
       user.then((userdata)=>{
        res.status(200).json({message:"user data",userdata})
       })
    }).catch((err)=>{
        res.status(500).json({message:"Internal server error"})
    })
})


app.get("/sql-data",async(req,res)=>{
   try {
    const data= await Employee.find({})
    res.status(200).json({message:"Data got",data})
   } catch (error) {
    res.status(500).json({message:"error"})
   }
})

module.exports=app