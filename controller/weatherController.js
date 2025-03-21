 const weatherModel = require('../model/weather')
 const axios = require('axios');
 const weather_key = process.env.weather_Api;

 exports.getWeatherUpdate = async (req, res)=>{
    try {
        
        const {city} = req.query; 
        const details = { q: city, appid:weather_key};

        if (city === null){
            return res.status(404).json({
                message: "City name is required"
            })
        };

        if (weather_key === null){
            return res.status(404).json({
                message: "Invalid Api key"
            })
        };

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_key}`);
        
        const {name, main, weather, wind, humidity, sys} = response.data;
        console.log(response)
        const weatherData = {
            city: `${name}, ${sys.country}`,
            temperature: main.temp,
            condition: weather[0].description,
            wind_speed: wind.speed,
            humidity: main.humidity
        }

        const climate = new weatherModel(weatherData);
        await climate.save();

        res.status(200).json({
            message: `The weather for: ${city}`,
            data:{
            city: `${name}, ${sys?.country}`,
            temperature: main.temperature,
            condition: weather[0].description,
            wind_speed: wind.speed,
            humidity: main.humidity
                // city: weatherData.city,
                // temperture: weatherData.temperture,
                // condition: weatherData.condition,
                // wind_speed: weatherData.wind_speed,
                // humidity: weatherData.humidity
            },    
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal server error failed to get the weather data"
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