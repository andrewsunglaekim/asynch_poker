// TODO: figure out constraints/validations for domain model
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
  pendingAction: String,
  dealer: Boolean
})

var UserSchema = new Schema({
  username: String,
  email: String,
  chips: Number,
  activeGames: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
})

var GameSchema = new Schema({
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
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
