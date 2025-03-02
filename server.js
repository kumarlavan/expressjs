const express=require("express")

const app=express()
app.use(express.json())

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

module.exports=app