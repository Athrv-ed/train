const express= require("express")
const router= express.Router()
const auth=require("../controller/auth/auth.controller");

router.post("/register", async(req,res)=>{

    await auth.register(req,res);
})

module.exports=router