const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
  },
  heading: {
    type: String,
    trim: true
  },
  para: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ['help', 'urgent', 'general', 'question'], // Define your categories here
    default:'help'
    
  },
  createdAt: {
    type: Date,
    default: Date.now
  }, 
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Feed', feedSchema);
