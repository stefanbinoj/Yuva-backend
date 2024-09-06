const Feed = require('../models/feed'); // assuming the schema is in models/feedModel.js

// Function to get all feeds
const getFeed = async (req, res) => {
  try {
    const feeds = await Feed.find(); // Fetch all feeds from the database
    res.status(200).json(feeds);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feeds', error: error.message });
  }
};

// Function to post a new feed
const postFeed = async (req, res) => {
  const {user_id, heading, para, location, phoneNumber } = req.body;

  // Create a new feed instance
  const newFeed = new Feed({
    user_id,
    heading,
    para,
    location,
    phoneNumber
  });

  try {
    const savedFeed = await newFeed.save(); // Save the feed to the database
    res.status(201).json(savedFeed);
  } catch (error) {
    res.status(500).json({ message: 'Error posting feed', error: error.message });
  }
};

module.exports = {
  getFeed,
  postFeed
};
