var mongoose = require('mongoose');
var RestaurantSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	price: Number

})

module.exports = mongoose.model("Restaurant", RestaurantSchema);