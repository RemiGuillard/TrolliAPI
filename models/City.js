var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
    name: String,
    country: String,
    note: String,
    time_interval: Number,
    api_name: String,
    last_update: { type: Date, default: Date.now },
});

module.exports = mongoose.model('City', CitySchema);