const crypto=require("crypto")
const express=require("express");
const router=express.Router();
const nodemailer=require("nodemailer")
const findemail=require("../models/findmailmodel");
const randomstring=require('randomstring');

router.post("/find",async(req,res)=>
{
    try{
        if(req.body.email===" "){
            console.log("No email found");
            res.status(400).send("Email required");
        }
        let{ email }=req.body;
        console.log(email);
        console.log("email destructured")
        let emailid= await findemail.emailcheck(email);
        console.log(emailid);
        if(emailid===null){
            console.log("email not in database");
            res.status(403).send("email not in database");
        }else{
            console.log("email checked");
            const token=randomstring.generate();
            console.log("go to update");
            console.log(token);
            let updated= await findemail.emailupdate(email,token);

            console.log(updated);
            console.log("updation done properly");
            const transporter=nodemailer.createTransport({
                host:"smtp.gmail.com",
                port:587,
                secure:false,
                auth:{
                    user:'jdbvhbvhjb',
                    pass:'bdjbhajmscdsvfjnj'
                },
                tls:{rejectUnauthorized:false
                }
            })
            console.log("transporter is also done");
            const mailoptions={
                from:"sdnkjbcnjbfkjenwjkaf",
                to:`${emailid.email}`,
                subject:"Email verification",
                text:`http://localhost:3000/verify\n\nThe token is ${token}`,
                
            }
            console.log("mailoptions done properly");
            transporter.sendMail(mailoptions,(err,res)=>{
                if(err){
                    console.log("there was a error",err)
                }else{
                    console.log("Here is a response",res);
                    res.status(200).json("recovery mail sent");
                    res.json({key:"mailsent"});
                }
            })
            console.log("mail sent !!!!!")

        }

    }catch(error){
        console.log(error);
    }
});
module.exports=router;
