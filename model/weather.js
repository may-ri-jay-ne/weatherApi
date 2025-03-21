const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    
    city:{
        type:String,
        required: true,
        lowercase: true,
        trim: true
    },
    condition:{
        type: String,
        required: true
    },
    humidity:{
        type: Number,
        required: true
    },

    temperature: {
        type: Number,
        required: true
    },
    wind_speed:{
        type: Number,
        required: true
    },


}, {timestamps: true});

const weatherModel = mongoose.model('Weathers', weatherSchema);
module.exports = weatherModel;