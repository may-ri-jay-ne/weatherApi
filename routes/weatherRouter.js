const router = require('express').Router();
const {getWeatherUpdate, getWeather } = require('../controller/weatherController');


router.get('/checkWeather', getWeatherUpdate);
router.get('/getweather', getWeather);

module.exports=  router;

