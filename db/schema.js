var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var CardSchema = new Schema({
  rank: String,
  suit: String
})

var PlayerSchema = new Schema({
  name: String,
  hand: [CardSchema],
  chips: Number,
  currentBet: Number
})

var GameSchema = new Schema({
  players: [PlayerSchema],
  board: [CardSchema],
  pot: Number,
  currentPlayerID: Number
})
