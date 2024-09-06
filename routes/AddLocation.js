const express= require('express');
const {addLocation,getLocation,addUpvote,addDownvote}= require('../controller/locationController');

router = express.Router();

router.post('/',addLocation);
router.get('/',getLocation);
router.post('/upvote',addUpvote)    
router.post('/downvote',addDownvote)

module.exports=router;