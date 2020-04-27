const mongoose=require("../utils/dbconfig")
const Schema=mongoose.Schema;

const userSchema=new Schema({
    email:{ type:String,
    unique:true},
    password:{type:String},
    secretToken:{type:String,
    unique:true}

})


let lea=mongoose.model('users',userSchema)
module.exports=lea