const express= require('express');
const {addLocation,getLocation}= require('../controller/locationController');

router = express.Router();

router.post('/',addLocation);
router.get('/',getLocation);

module.exports=router;