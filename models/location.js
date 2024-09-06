const mongoose=require('mongoose');

const locationSchema = mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"},
    position:{
        type:String,
        required:[true,'Please provide a valid latitude']
    }},{
        timestamp:true
    }

)
module.exports=mongoose.model('Location',locationSchema);