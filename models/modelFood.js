var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  name : String,
  price : Number,
})
var Foods = mongoose.model('Foods', foodSchema);

module.exports = Foods ;
