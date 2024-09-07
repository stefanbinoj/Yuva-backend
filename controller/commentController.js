const Comment = require('../models/comment'); // Adjust the path as needed
const Feed = require('../models/feed'); // Adjust the path as needed

// Function to post a new comment
const postComment = async (req, res) => {
  const { user_id, feed_id, comment } = req.body;

  const newComment = new Comment({
    user_id,
    feed_id,
    comment
  });

  try {
    const savedComment = await newComment.save();

    // Optionally update the feed to include the new comment
    await Feed.findByIdAndUpdate(feed_id, { $push: { comments: savedComment._id } });

    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: 'Error posting comment', error: error.message });
  }
};

// Function to get comments for a specific feed
const getComments = async (req, res) => {
  const { feed_id } = req.params;

  try {
    const comments = await Comment.find({ feed_id }).populate('user_id', 'name').exec();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments', error: error.message });
  }
};
const acceptComment = async(req, res)=>{
  const {comment_id}=req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
        comment_id,   // Query to find the comment by '_id'
        { accepted: true },  // Update the 'accepted' field to true
        { new: true }  // Return the updated document
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: 'Error accepting comment', error: error.message });
  }
}

module.exports = {
  postComment,
  getComments,
  acceptComment
};
