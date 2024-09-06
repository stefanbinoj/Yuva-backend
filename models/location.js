const mongoose=require('mongoose');

const locationSchema = mongoose.Schema({
    position:{
        type:String,
        required:[true,'Please provide a valid latitude']
    },
    upvotes: {
        type: Number,
        default: 0  // Initialize upvotes to 0
      },
      downvotes: {
        type: Number,
        default: 0  // Initialize downvotes to 0
      }
    
},{
        timestamp:true
    }

)
module.exports=mongoose.model('Location',locationSchema);