var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Forecast = require('../models/Forecast.js');

/* GET /forecast listing. */
router.get('/', function(req, res, next) {
    Forecast.find(function (err, forecast) {
        if (err) return next(err);
        res.json(forecast);
    });
});


/* POST /forecast */
router.post('/', function(req, res, next) {
    Forecast.create(req.body, function (err, forecast) {
        if (err) return next(err);
        res.json(forecast);
    });
});


/* GET /forecast/id */
router.get('/:id', function(req, res, next) {
    Forecast.findById(req.params.id, function (err, forecast) {
        if (err) return next(err);
        res.json(forecast);
    });
});


/* PUT /forecast/:id */
router.put('/:id', function(req, res, next) {
    Forecast.findByIdAndUpdate(req.params.id, req.body, function (err, forecast) {
        if (err) return next(err);
        res.json(forecast);
    });
});


/* DELETE /forecast/:id */
router.delete('/:id', function(req, res, next) {
    Forecast.findByIdAndRemove(req.params.id, req.body, function (err, forecast) {
        if (err) return next(err);
        res.json(forecast);
    });
});

module.exports = router;
