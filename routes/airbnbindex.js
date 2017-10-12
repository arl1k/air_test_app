var express = require('express');
var router = express.Router();
var controller = require('./Airbnbrouter')


router.get('/search', controller.GetDataFromAirbnbByCity);
router.get('/property/:id', controller.GetDetailsById)

module.exports = router;
