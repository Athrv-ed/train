const express= require("express")

const jwt=require("jsonwebtoken")
const {validationResult}= require("express-validator")
const bcrypt = require('bcryptjs');
const pool=require("../../utils/config")

module.exports.register = async (req, res) =>{
    try{
    const result= validationResult(req,res)
    if(!result.isEmpty()){
        res.status(400)
        .json(result.array()[0])
        return
    }
    const {user_id, email_id, user_name, password}= req.body
    console.log(user_id,email_id,user_name, password)
    
    
        const check_if_user = await pool.query("select * from member where email_id=$1 and user_id=$2",[email_id,user_id]);
        console.log(check_if_user.rows[0])
        if(check_if_user.rows[0]=='undefined'){
            console.log("Invalid")
            
        }
        else{
            const salt= await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt);
            const user_signup = await pool.query("insert into login (user_id, password, user_name) values ($1,$2, $3)",[user_id, hash, user_name])
           console.log(user_signup);
            res.json(201);
        }
        
    }
    catch(e){
        console.error(e)
          res.json(500);
    }
}
module.exports.login = async (req,res)=>{
    try{
        
    }
}