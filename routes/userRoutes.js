const express=require("express")
const { registerUser, loginUser, getUser ,getUserDetails} = require("../controller/userController")
//const validateToken=require("../middleware/validateTokenHandler")

const router=express.Router()

router.get('/',getUser)

router.post('/register',registerUser)

router.post('/login',loginUser)    
router.get('/:id',getUserDetails)
//router.get('/current',validateToken,currUser )

module.exports=router 