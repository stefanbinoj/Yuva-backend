const asynchandler = require('express-async-handler');
const Audio=require('../models/audio');

const addAudio = asynchandler(async(req,res)=>{
    console.log(req.body)
    const {user_id, buffer } = req.body;
    const audio= await Audio.create(user_id,buffer);
    res.status(201).json(buffer);
})

module.exports = {addAudio}