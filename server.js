const express = require('express');
const weatherRouter = require('./routes/weatherRouter');
require('./config/database');

 const PORT = 1119;
 const app = express();

 app.use(express.json());
app.use(weatherRouter)

 
 app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`)
 })