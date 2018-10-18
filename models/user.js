const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema= new Schema({
    userId:String,
    userName:String,
    email:String
    
});

const User=mongoose.model("user",userSchema);
module.exports=mongoose