const express = require('express');
const {addAudio} = require('../controller/audioController');

router = express.Router();

router.post('/',addAudio)

module.exports=router;

