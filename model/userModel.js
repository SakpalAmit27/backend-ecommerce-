// mongoose // 
import mongoose, { mongo } from "mongoose";


// val  // 
import validator from "validator";


// creating userschema model // 

const UserSchema = new mongoose.model({
    
    name:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:validator.isEmail,
            message:"please enter an valid email",
            isAsync:false
        }
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    isVerified:{
        type:Boolean,
        default:false

    },
    VerificationToken:{
        type:String,
        default:null 
    }

},{
    timestamps:true
})

// model // 

const User = mongoose.model('User',UserSchema);

// exporting the model //

export default User;