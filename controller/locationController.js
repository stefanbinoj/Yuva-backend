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
const addUpvote=asyncHandler(async(req,res)=>{
    const votes = await Location.findOneAndUpdate(
        { position },   // Query to find the location by 'position'
        { $inc: { upvotes: 1 } },  // Increment the 'upvotes' field by 1
        { new: true }  // Return the updated document
      )
      try {
        const result = await Location.aggregate([
          {
            $group: {
              _id: null,  // We are not grouping by any field, so use null
              averageUpvotes: { $avg: "$upvotes" },  // Calculate the average of 'upvotes'
              averageDownvotes: { $avg: "$downvotes" }  // Calculate the average of 'downvotes'
            }
          }
        ]);
        const avg = result.averageDownvotes+averageUpvotes/2
        
        const averages = result.length > 0 ? avg : 0;
        const opacity = votes.upvotes/averages;




        res.status(200).json({"opacity":opacity});
      } catch (error) {
        res.status(500).json({ message: 'Error calculating average votes', error });
      }
      
})
const addDownvote=asyncHandler(async(req,res)=>{
    const votes = await Location.findOneAndUpdate(
        { position },   // Query to find the location by 'position'
        { $inc: { downvotes: -1 } },  // Increment the 'upvotes' field by 1
        { new: true }  // Return the updated document
      )
      
      res.status(200).json(votes.downvotes);
})
const getLocation = asyncHandler(async(req,res)=>{
    const location = await Location.find()
    res.json(location)
})

module.exports={addLocation,getLocation,addUpvote,addDownvote}