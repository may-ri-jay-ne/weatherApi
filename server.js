const express = require('express');
const router = require('./routes/weatherRouter');
require('./config/database');

 const PORT = 1119;
 const app = express();

 app.use(express.json());
app.use(router)

 
 app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`)
 })