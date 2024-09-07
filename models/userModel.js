const mongoose = require("mongoose")

const userSchema=mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:"User"
    },
    phone:{
        type:String,
        required:[true,"Please add a phone number"],
        unique:[true,"phone alreaddy taken"]
    },
    password:{
        type:String,
        required:[true,"Please add an password"]
    },
    position:{
        type:String
    },
    name:{
        type:String,
        
    }
},{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema)