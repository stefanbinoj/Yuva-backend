const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({

    audioData: {
        type: Buffer,  
        required: true
      }
})

module.exports = mongoose.model('Audio', audioSchema);