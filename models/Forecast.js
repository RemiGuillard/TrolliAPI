var mongoose = require('mongoose');

var ForecastSchema = new mongoose.Schema({
    cloud_cover: Number,
    temperature: Integer,
    weather_desc: String,
    feels_like_C: Number,
    feels_like_F: Number,
    temp_C: Number,
    temp_F: Number,
    humidity: Number,
    pressure: Number,
    precipitation_mm: Number,
    visibility: Number,
    wind_dir_degree: Number,
    wind_speed_kmh: Number,
    wind_dir_16_pt: String,
    forecast_time: { type: Date, default: Date.now },
    local_time: { type: Date, default: Date.now },

    astronomy: {
        moonrise: Date,
        moonset: Date,
        sunrise: Date,
        sunset: Date,
    },

    daily_forecast: {
        max_temp_C: Number,
        min_temp_C: Number,
        max_temp_F: Number,
        min_temp_F: Number,
        uv_index: Number,
    },
    
});

module.exports = mongoose.model('Forecast', ForecastSchema);