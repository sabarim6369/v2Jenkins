const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("Bye😍😍😍😍😍😍😍");
})
app.listen(8000,'0.0.0.0',()=>{
console.log("Server running in port 8000")
})
