const mongoose=require('mongoose');

const locationSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
},
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