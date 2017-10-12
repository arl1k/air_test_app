'use strict'
var request = require('request');
var promise = require('bluebird')
var options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    }
}

exports.GetDataFromAirbnbByCity = function (cityName) {
    let page = 0;
    options.url = "https://www.airbnb.com/search/search_results?location=" + encodeURIComponent(/*cityName*/"Daugavpils, Latvia") + "&page=" + page;

    return new promise(function (resolve, reject) {
        request(options, function (err, res, body) {
            resolve(JSON.parse(body).results_json.search_results)
        })
    })
        .then(function (propArr) {
            console.log(propArr.length)
            return (propArr)
        })
        .catch(function (err) {
            return err;
        })
}

// function GetCertainPageFromAirbnb() {

// }


exports.GetDetailsById = function(propertyId) {
    options.url = "https://www.airbnb.com/api/v1/listings/" + propertyId + "?" + 'd306zoyjsyarp7ifhu67rjxn52tv0t20';
    // options.key = 'd306zoyjsyarp7ifhu67rjxn52tv0t20'

    return new promise(function (resolve, reject) {
        request(options, function (err, res, body) {
            resolve(JSON.parse(body))
        })
    })
        .then(function (propArr) {
            console.log(propArr.length)
            return (propArr)
        })
        .catch(function (err) {
            return err;
        })
}