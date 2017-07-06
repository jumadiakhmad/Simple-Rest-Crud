var mongoClient = require('mongodb').MongoClient();

var Restaurants = require('../models/modelRestaurant');

function getAll(req,res) {
  Restaurants.find({}, function(err,result){
    if(err) res.status(500).send(err.message);
    res.send(result);
  })
}

function getSingle(req,res) {
  Restaurants.find({
    _id : req.params.id
  }, (err,result) => {
    if(err) res.status(500).send(err.message)
    console.log("Show Single Success");
    res.send(result);
  })
}

function createRestaurant(req,res) {
  Restaurants.create({
    name : req.body.name,
    owner : req.body.owner,
    addres : req.body.addres
  }, (err,result) => {
    if(err) res.send(err.message)
    res.send(result);
  })
}
module.exports ={
  getAll, getSingle, createRestaurant
}
