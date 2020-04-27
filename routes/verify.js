const express = require('express');
const router = express.Router();
const verifymodel=require('../models/verifymodel')

router.post('/verify',async(req,res)=>{
    try{
        const{ token }=req.body;
        console.log(token);
        let findverify=await verifymodel.tokencheck(token);
        console.log(findverify);
        if(findverify===null){
            console.log("Email not verified")
            res.send('email verified successfully');
        }
        else{
            console.log('email verfied');
            res.send('email verfied');
        }

    }catch(error){
        console.log(error);
    }
})
module.exports=router;
//qOD1eF5RMJxttJJ9kBIXVN4U3cf3THOW