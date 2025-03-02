const mongoose=require("mongoose")

const emp_schema=new mongoose.Schema({
    empno:Number,
    ename:String,
    job:String,
    mgr:Number,
    sal:Number,
    deptno:Number
})

const Employee=mongoose.model("emps",emp_schema)

module.exports={Employee}