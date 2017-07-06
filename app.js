var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var foods = require('./routes/api/foods');
var restaurants = require('./routes/api/restaurants');

var app = express();

mongoose.connect('mongodb://localhost/jumadi');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/api/foods', foods);
app.use('/api/restaurants', restaurants);

app.listen(3000, () => console.log('Listening on port 3000..'));
