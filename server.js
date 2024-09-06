const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();

connectDb()
const app = express();
const PORT=process.env.PORT;

app.use(express.json())

app.use('/sos',require('./routes/EmergencyNumber'))
app.use('/add-location', require('./routes/AddLocation'))
app.use('/upload',require('./routes/AddAudio'))

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Port is running at ${PORT}`)
})