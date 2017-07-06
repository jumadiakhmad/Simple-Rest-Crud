var mongoClient = require('mongodb').MongoClient();
//var url = 'mongodb://localhost:27017/library';
//var ObjectId = require('mongodb').ObjectId;
var Foods = require('../models/modelFood');

function getAll(req, res) {
  Foods.find({}, (err,result) => {
    if(err) res.status.send(err.message)
    console.log('Show All Data Foods Success');
    res.send(result)
  })
}

function getSingle(req, res) {
  Foods.find({
    _id : req.params.id
  }, (err,result)=>{
    if(err) res.status(500).send(err.message);
    console.log('Show Single Data Success ');
    res.send(result);
  })
}

// function createFood(req,res) {
//   // Foods.create({
//   // }, function(err,data){
//   //
//   //   if(err) {
//   //     res.send(err.message)
//   //   }
//   //   console.log('Insert Data Food Success');
//   //   res.send(data);
//   // })
//   Foods.create({
//
//   } (err,result) => {
//     if(err) res.status(500).send(err.message);
//     console.log("Create Data Foods Success");
//     ress.send(result);
//   })
// }

function createFood(req, res) {
  Foods.create({
    name  : req.body.name,
    price : req.body.price
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert Data food Success");
    console.log(result);
    res.send(result);
  });
}

function updateFood(req, res) {
  Foods.find({
    _id: req.params.id
  }, function(err, result) {
    Foods.update({
    }, {
      _id: req.params.id,
      $set: {
        name : req.body.name,
        price : req.body.price
      }
    }, (err, result) => {
      if (err){
        res.send(err)
      }
        console.log("Update Data food Success");
        res.send(result);
    });
  });
}

function deleteFood(req, res) {
  Foods.remove({
    _id: req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete Succes");
    console.log(result);
    res.send(result);
  });
}



module.exports = {
  getAll, getSingle, createFood, updateFood, deleteFood
}
