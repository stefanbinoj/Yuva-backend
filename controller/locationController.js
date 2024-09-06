const asyncHandler=require("express-async-handler")
const Location=require("../models/location");

const addLocation=asyncHandler(async(req,res)=>{
    console.log(req.body)
    const{user_id,position}=req.body;
    const loc = await Location.create({
        user_id,
        position,
    })
    res.status(201).json(loc)


})
const addUpvote=asyncHandler(async(req,res)=>{
    const {position}=req.body;
    const votes = await Location.findOneAndUpdate(
        { position },   // Query to find the location by 'position'
        { $inc: { upvotes: 1 } },  // Increment the 'upvotes' field by 1
        { new: true }  // Return the updated document
      )
      console.log(votes)
      try {
        const result = await Location.aggregate([
          {
            $group: {
              _id: null,  // We are not grouping by any field, so use null
              sumUpVotes: { $sum: "$upvotes" },  // Calculate the average of 'upvotes'
              sumDownVotes: { $sum: "$downvotes" }  // Calculate the average of 'downvotes'
            }
          }
        ]);
        // Check if result is not empty and access the values
        const sumUpVotes = result.length > 0 ? result[0].sumUpVotes : 0;
        const sumDownVotes = result.length > 0 ? result[0].sumDownVotes : 0;
        const totalSum = sumUpVotes-sumDownVotes;
        const count = await Location.countDocuments({});
        const avg = totalSum/count;
        console.log(avg);
        
        const averages = result.length > 0 ? avg : 0;
        const indSum = votes.upvotes+votes.downvotes;
        console.log(indSum);
        let opacity=indSum/avg
        console.log(opacity);
        if (opacity >1){

            opacity=1;
        }
        else if(opacity <0){
            opacity=0;
        }
        else{
            opacity=opacity;
        }





        const roundedStr = opacity.toFixed(2);





        res.status(200).json({"opacity":roundedStr});
      } catch (error) {
        res.status(500).json({ message: 'Error calculating average votes', error });
      }
      
})
const addDownvote=asyncHandler(async(req,res)=>{
    const {position}=req.body;
    const votes = await Location.findOneAndUpdate(
        { position },   // Query to find the location by 'position'
        { $inc: { downvotes: -1 } },  // Increment the 'upvotes' field by 1
        { new: true }  // Return the updated document
      )
      
      try {
        const result = await Location.aggregate([
          {
            $group: {
              _id: null,  // We are not grouping by any field, so use null
              sumUpVotes: { $sum: "$upvotes" },  // Calculate the average of 'upvotes'
              sumDownVotes: { $sum: "$downvotes" }  // Calculate the average of 'downvotes'
            }
          }
        ]);
        // Check if result is not empty and access the values
        const sumUpVotes = result.length > 0 ? result[0].sumUpVotes : 0;
        const sumDownVotes = result.length > 0 ? result[0].sumDownVotes : 0;
        const totalSum = sumUpVotes-sumDownVotes;
        const count = await Location.countDocuments({});
        const avg = totalSum/count;
        console.log(avg);
        
        const averages = result.length > 0 ? avg : 0;
        const indSum = votes.upvotes+votes.downvotes;
        console.log(indSum);
        let opacity=indSum/avg
        console.log(opacity);
        if (opacity >1){

            opacity=1;
        }
        else if(opacity <0){
            opacity=0;
        }
        else{
            opacity=opacity;
        }
        const roundedStr = opacity.toFixed(2);





        res.status(200).json({"opacity":roundedStr});
      } catch (error) {
        res.status(500).json({ message: 'Error calculating average votes', error });
      }
})
const getLocation = asyncHandler(async(req,res)=>{
    const location = await Location.find()
    res.json(location)
})

module.exports={addLocation,getLocation,addUpvote,addDownvote}