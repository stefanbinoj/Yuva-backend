const express=require('express');
require('dotenv').config(); 
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();
const PORT = process.env.PORT || 3000;





app.listen(PORT,()=>{
    console.log(`Port is running at ${PORT}`)
})