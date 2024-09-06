const express = require('express');
const router = express.Router();
const { getFeed, postFeed } = require('../controller/feedController');

// Route to get all feeds
router.get('/', getFeed);

// Route to post a new feed
router.post('/', postFeed);

module.exports = router;
