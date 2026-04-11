const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log("database error" , err)
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});