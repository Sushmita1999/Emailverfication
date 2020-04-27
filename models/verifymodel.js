const password=require('./schema');

module.exports.tokencheck=async function(token){
    try{
        var token1=password.findOne({secretToken:token});
        return token1;
    }catch(error){
        console.log(error);
    }
}
