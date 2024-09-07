const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
  },
  feed_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Feed' // Reference to the Feed model
  },
  comment: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', commentSchema);
