const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/players', function(req, res){
  res.send({type: 'GET'});
});

//players
router.post('/players', function(req, res, next){
  Player.create(req.body).then(function(player){
    res.send(player);
  }).catch(next);
});

router.put('/players/:id', function(req, res, next){
  Player.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(player){
      res.send(player);
    });
  });
});

router.delete('/players/:id', function(req, res, next){
  console.log(req.params.id);
  Player.findByIdAndRemove({_id: req.params.id}).then(function(player){
    res.send(player);
  }).catch(next);
});

//matches


module.exports = router;
