const express = require('express');
const {getPic}=require('../controller/pictureController');

const router= express.Router();

router.get('/',getPic);

module.exports=router;