var Express=require("express")
var app=Express()
app.get('/name',(req,res)=>{
    res.send("Enter Name")
})
app.get('/mail',(req,res)=>{
    res.send("Enter Emailid")
})
app.get('/address',(req,res)=>{
    res.send("Enter Address")
})
app.listen(5000,(req,res)=>{
    console.log("server ruuning inn")
})