import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide a username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please provide an email"],
        uinque:true
    },
    password:{
        type:String,
        required:[true,"plrase provide a password"]
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{ 
        type:Boolean,
        default:false    
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:String,
    verifyToken:String,
    veryfyTokenExpiry:Date
})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User