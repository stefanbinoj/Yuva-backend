const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
},

  
    audioData: {
        type: Buffer,  
        required: true
      }
})

module.exports = mongoose.model('Audio', audioSchema);