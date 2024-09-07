const express = require('express');
const router = express.Router();
const { getFeed, postFeed } = require('../controller/feedController');
const { postComment, getComments ,acceptComment} = require('../controller/commentController');

// Route to get all feeds
router.get('/', getFeed);

// Route to post a new feed
router.post('/', postFeed);

router.post('/comments', postComment);

// Route to get comments for a specific feed
router.get('/comments/:feed_id', getComments);
router.post('/comments/:comment_id', acceptComment);


module.exports = router;
