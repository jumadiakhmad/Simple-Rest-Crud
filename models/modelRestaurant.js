var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resturantSchema = new Schema({
  name : String,
  price : Number
})
var Restaurants = mongoose.model('Restaurants', resturantSchema);

module.exports = router;
