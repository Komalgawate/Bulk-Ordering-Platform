import mongoose, { models } from "mongoose";
import {Schema} from mongoose;
import { timeStamp } from "console";
const UserSchema=new Schema({
    email:{type:String,required: true,unique:true},
    password:{type:String,required:true,
        validate:pass=>{
            if(!pass?.length||pass.length<5){
                new Error('password must be 5 character')
            }
        }
    },
},
{timestamps:true}); 
const User=models?.User||model('User',UserSchema);
export default User;
