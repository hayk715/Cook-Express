const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema= new Schema({
    userId:String,
    userName:String,
    email:String
    
});
module.exports=mongoose