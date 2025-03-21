 const weatherModel = require('../model/weather')
 const axios = require('axios');
 const secret_key = process.env.weather_Api;

 exports.getWeatherUpdate = async (req, res)=>{
    try {
        
        const {city} = req.query;
        const units = "metric"; 
        const details = { q: city, appid:secret_key, units};

        if (!city){
            return res.status(404).json({
                message: "City name is required"
            })
        }
        console.log(weatherData)
        // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        const response = await axios.post(`http://api.openweathermap.org/geo/1.0/direct?q= ${city} &appid= ${secret_key} $units = metric`);
        
        const {name, main, weather, wind} = response.data;
        
        const weatherData = {
            city: `${name}, ${sys?.country}`,
            temperture: main.temperature,
            condition: weather[0].description,
            wind_speed: wind.speed,
            humidity: main.humidity

        };
        const climate = new weatherModel(weatherData);
        await climate.save();

        res.status(200).json({
            message: "Today's weather has been updated",
            data:{
                city: weatherData.city,
                temperture: weatherData.temperture,
                condition: weatherData.condition,
                wind_speed: weatherData.wind_speed,
                humidity: weatherData.humidity
            },    
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal server error failed to get the"
        })
    }
 };

 exports.getWeather = async (req, res) =>{
    try {
        const weatherData = await weatherModel.find();
        return res.status(201).json({
            message: "Here is your weather update",
            data: weatherData
        });

    } catch (error) {
        onsole.log(error.message)
        res.status(500).json({
            message: "Error getting the weather update"
        })
    }
 }