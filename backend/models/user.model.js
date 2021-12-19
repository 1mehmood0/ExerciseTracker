const mongoose=require('mongoose');
const  Schema=mongoose.Schema;
const userSchema=new Schema({username:{type:String,required:true,trim:true,unique:true,minlength:3},},
    {
        Timestamps:true,
    });
const User=mongoose.model('User',userSchema);
module.exports=User;
