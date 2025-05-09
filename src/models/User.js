
import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, Unique: true },
    password: {
        type: String, required: true,
        validate: pass => {
            if (!pass?.length || pass.length < 5) {
                new Error("password must be greater than 5");
                return false;
            }
        },
    },
},{timestamps:true});
 const User =models?.User || model('User', UserSchema);
 export default User;
