const password=require('./schema');

module.exports.emailcheck=async function(emailid){
    try{
        var emailid1=password.findOne({email:emailid});
        console.log(emailid1.email);
        return emailid1;
    }catch(error){
        console.log(error);
    }
}

module.exports.emailupdate=async function(emailid,token){
    try{
        return await password.findOneAndUpdate({
            email:emailid
        },{
            secretToken:token
        },{new:true}
        );
    }catch(error){
        throw new Error(error);
    }
}