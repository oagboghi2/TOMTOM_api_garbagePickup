var express = require('express');
var router = express.Router();
var db = require('../model');

router.get('/', (req, res)=>{
  db.Tom.find()
    .then(function(pickups){
      res.json(pickups);
    })
    .catch(function(err){
      res.send(err);
    });
});

router.post('/', (req, res)=>{
  db.Tom.create(req.body)
    .then(function(newPickup){
      res.status(201).json(newPickup);
    })
    .catch(function(err){
      res.send(err);
    });
});

router.get('/:pickupId', (req, res)=>{
  db.Tom.findBy(req.params.pickupId)
    .then(function(foundPickup){
      res.json(foundPickup);
    })
    .catch(function(err){
      res.send(err);
    });
});

module.exports = router;
