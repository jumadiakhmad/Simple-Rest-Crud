var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  name : String,
  owner : String,
  addres : String
})
var Foods = mongoose.model('Foods', foodSchema);

module.exports = router;
