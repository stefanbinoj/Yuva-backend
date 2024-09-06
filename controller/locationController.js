const asyncHandler=require("express-async-handler")
const Location=require("../models/location");

const addLocation=asyncHandler(async(req,res)=>{
    console.log(req.body)
    const{position}=req.body;
    const loc = await Location.create({
        position,
    })
    res.status(201).json(loc)


})

const getLocation = asyncHandler(async(req,res)=>{
    const location = await Location.find()
    res.json(location)
})

module.exports={addLocation,getLocation}