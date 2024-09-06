const express = require('express');
const {getContacts}=require('../controller/contactsController');

const router= express.Router();

router.get('/',getContacts);

module.exports=router;