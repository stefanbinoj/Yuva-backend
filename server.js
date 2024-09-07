const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require('cors');
const dotenv=require("dotenv").config();

connectDb()
const app = express();
const PORT=process.env.PORT;

app.use(cors());  // This allows all origins
app.use(express.json())

app.use('/sos/get-numbers',require('./routes/EmergencyNumber'))
app.use('/get-profile',require('./routes/ProfilePicture'))
app.use('/location', require('./routes/AddLocation'))
app.use('/sos/upload',require('./routes/AddAudio'))
app.use("/users",require('./routes/userRoutes'))
app.use('/feed',require('./routes/FeedSection'))





app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Port is running at ${PORT}`)
})