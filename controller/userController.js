const asyncHandler=require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User=require("../models/userModel")

const registerUser=asyncHandler(async (req,res)=>{
    const{phone,password,position,name}=req.body
    if(! phone || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable= await User.findOne({phone})
    console.log("User available : ",userAvailable)
    if(userAvailable){
        res.status(400)
        throw new Error("Phone number already registered")
    }

    const hashedPassword=await bcrypt.hash(password,10)
    console.log("Hashed Pass",hashedPassword)

    const user = new User({
        phone:phone,
        password:hashedPassword,
        position,
        name
    })
    console.log("usr created : ",user)
    if(user){
        res.status(201).json({_id:user.id})
    }else{
        res.status(400)
        throw new Error("Couldn't create a user ")
    }

    res.json({"message":"Register the user"})
})

const loginUser=asyncHandler(async (req,res)=>{
    const{phone,password}=req.body
    if(!phone || !password){
        res.status(400)
        throw new Error("Validation Error ")
    }
    const user = await User.findOne({phone})
    console.log(user)
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                phone: user.phone,
                id:user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1m"}
    )
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("Validation unsuccessfull")
    }
    res.json({"message":"Login the user"})
})

const getUser=asyncHandler(async (req,res)=>{
    const user=await User.find({})
    res.json(user)
})

const getUserDetails=asyncHandler(async (req,res)=>{
    const user=await User.findById(req.params.id)
    res.json(user)
})

module.exports={registerUser,loginUser,getUser,getUserDetails}