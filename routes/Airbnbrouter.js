var promise = require('bluebird')
var airbnb = require('airapi'); //vikt
var request = require('request');
var logic = require('../logic/airbnbnlogic');

exports.GetDataFromAirbnbByCity = function(req, res) {

    let city = req.query ? req.query : "Daugavpils, Latvia";

    logic.GetDataFromAirbnbByCity(city)
    .then(function(data) {
        // res.send(data)
        res.send('ok')
    })
    .catch(function(err){
        res.send(err).status(404);
    })
}

exports.GetDetailsById = function(req, res) {
    let propertyId = req.params.id;

    logic.GetDetailsById(propertyId)
    .then(function(details) {
        // res.send(details)
        res.send('ok')
    })
    .catch(function(err){
        res.send(err).status(404);
    })
}