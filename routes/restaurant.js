var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Restaurant = require('../models/Restaurant.js');

//Home page
router.get('/', function(req, res, next){
	Restaurant.find(function(err, restaurant){
		if(err) return next(err);
		res.json(restaurant)
	});
});

router.post('/', function(req, res, next){
	Restaurant.create(req.body, function(err, restaurant){
		if(err) return next(err);
		res.json(restaurant);
	});
});

module.exports = router;