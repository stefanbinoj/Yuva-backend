const asynchandler = require('express-async-handler');
const Audio=require('../models/audio');

const addAudio = asynchandler(async(req,res)=>{
    console.log(req.body)
    const { buffer } = req.body;
    const audio= await Audio.create(buffer);
    res.status(201).json(buffer);
})

module.exports = {addAudio}