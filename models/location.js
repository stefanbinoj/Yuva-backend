const mongoose=require('mongoose');

const locationSchema = mongoose.Schema({
    position:{
        type:String,
        required:[true,'Please provide a valid latitude']
    }},{
        timestamp:true
    }

)
module.exports=mongoose.model('Location',locationSchema);