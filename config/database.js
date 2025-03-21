// import mongoose
const mongoose = require('mongoose');
//require Dotenv
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
.then(() => {
    console.log("Database connection established")

}).catch ((error)=>{  
    console.log('This Error is coming from the database' + error.message)
})