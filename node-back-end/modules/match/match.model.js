const mongoose = require("mongoose");
Schema = mongoose.Schema;

const matchSchema = new mongoose.Schema({
  season: Number,
  city: String,
  date: String,
  teams: [
    {
      _id: false,
      team: {
        type: Schema.ObjectId,
        default: null,
        ref: 'Teams'
      },
      order: Number
    }
  ],
  toss: {
    _id: false,
    winner: {
      type: Schema.ObjectId,
      default: null,
      ref: 'Teams'
    },
    decision: {
      type: String,
      enum: ['bat', 'field']
    }
  },
  result: {
    type: String,
    enum: ['normal', 'tie', 'no result']
  },
  dlApplied: Boolean,
  winner: {
    _id: false,
    team: {
      type: Schema.ObjectId,
      default: null,
      ref: 'Teams'
    },
    byRuns: Number,
    byWickets: Number
  },
  player_of_match: String,
  venue: String,
  umpires: [
    {
      _id: false,
      name: String,
      order: Number
    }
  ]
});

module.exports = mongoose.model('Matchs', matchSchema)