var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var City = require('../models/City.js');

/* GET /city listing. */
router.get('/', function(req, res, next) {
    City.find(function (err, city) {
        if (err) return next(err);
        res.json(city);
    });
});


/* POST /city */
router.post('/', function(req, res, next) {
    City.create(req.body, function (err, city) {
        if (err) return next(err);
        res.json(city);
    });
});


/* GET /city/id */
router.get('/:id', function(req, res, next) {
    City.findById(req.params.id, function (err, city) {
        if (err) return next(err);
        res.json(city);
    });
});


/* PUT /city/:id */
router.put('/:id', function(req, res, next) {
    City.findByIdAndUpdate(req.params.id, req.body, function (err, city) {
        if (err) return next(err);
        res.json(city);
    });
});


/* DELETE /city/:id */
router.delete('/:id', function(req, res, next) {
    City.findByIdAndRemove(req.params.id, req.body, function (err, city) {
        if (err) return next(err);
        res.json(city);
    });
});

module.exports = router;
