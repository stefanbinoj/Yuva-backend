const Feed = require('../models/feed'); // assuming the schema is in models/feedModel.js

// Function to get all feeds
const getFeed = async (req, res) => {
  const { category } = req.query;

  try {
    const query = category ? { category } : {}; // Filter by category if provided
    const feeds = await Feed.find(query).populate('comments').exec();
    res.status(200).json(feeds);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feeds', error: error.message });
  }
};

// Function to post a new feed
const postFeed = async (req, res) => {
  const { user_id, heading, para, location, phoneNumber, category } = req.body;

  const newFeed = new Feed({
    user_id,
    heading,
    para,
    location,
    phoneNumber,
    category
  });

  try {
    const savedFeed = await newFeed.save();
    res.status(201).json(savedFeed);
  } catch (error) {
    res.status(500).json({ message: 'Error posting feed', error: error.message });
  }
};

module.exports = {
  getFeed,
  postFeed
};
