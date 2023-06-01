const mongoose=require('mongoose');

const AuthSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    chance:{
        type:Number,
        default:5
    },
    coupon:{
        type:Array,
        default:[]
    },
    id:{
        type:String
    }

})

const UserAuth= new mongoose.model("UserAuth",AuthSchema);
module.exports =UserAuth;