const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create player schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
