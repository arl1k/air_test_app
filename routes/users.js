var express = require('express');
var router = express.Router();
const https = require('https');
var promise = require('bluebird')
var airbnb = require('airapi');
var request = require('request')

router.get('/', function (req, res, next) {

  // airbnb.search({
  //   location: 'Seattle, WA',
  //   checkin: '07/03/2015',
  //   checkout: '07/06/2015',
  //   guests: 2,
  //   page: 2,
  //   ib: true
  //  }).then(function(searchResults) {
  //    console.log(searchResults.length);
  //  });

  let options = {
    url: "https://www.airbnb.com/search/search_results?location=",
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    }
  }

  options.url += encodeURIComponent("Daugavpils, Latvia") + "&page=4";

  return new promise(function (resolve, reject) {
    request(options, function (err, res, body) {
      resolve(JSON.parse(body).results_json.search_results)
    })
  })
    .then(function (propArr) {
      console.log(propArr.length)
      res.send('ok');
    })
    .catch(function (err) {
      console.log(err)
    })

});

module.exports = router;
