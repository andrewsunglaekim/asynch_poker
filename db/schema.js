console.log("schema running")
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
  currentBet: Number,
  pendingAction: Boolean
})

var UserSchema = new Schema({
  username: String,
  email: String,
  chips: Number,
  activeGames: [PlayerSchema]
})

var GameSchema = new Schema({
  players: [PlayerSchema],
  board: [CardSchema],
  deck: [CardSchema],
  pot: Number,
  currentPlayerID: ObjectId
})

module.exports = {
  CardSchema: CardSchema,
  PlayerSchema: PlayerSchema,
  UserSchema: UserSchema,
  GameSchema: GameSchema
}
