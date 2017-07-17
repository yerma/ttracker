const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Player = require('../models/player');

//create player schema
const MatchSchema = new Schema({
  players: {
    type: Array,

  }
});

const Match = mongoose.model('match', MatchSchema);

module.exports = Match;
