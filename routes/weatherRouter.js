const { weatherUpdate } = require('../controller/weatherController');

const router = require('express').Router();


router.get('/checkWeather', weatherUpdate)
module.exports=  router;
