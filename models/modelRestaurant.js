var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resturantSchema = new Schema({
  name : String,
  owner : String,
  addres: String
})
var Restaurants = mongoose.model('Restaurants', resturantSchema);

module.exports = Restaurants;
