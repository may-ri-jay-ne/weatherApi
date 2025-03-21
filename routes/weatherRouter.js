const {getWeatherUpdate, getWeather } = require('../controller/weatherController');

const router = require('express').Router();

router.get('/checkWeather', getWeatherUpdate);
router.get('/getweather', getWeather);

module.exports=  router;

