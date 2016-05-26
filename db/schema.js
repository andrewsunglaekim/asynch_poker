console.log("schema running")
var mongoose = require('mongoose');
var Deck = require("../models/pokerLogic/deck")
var _ =  require('underscore')
deck = new Deck()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var CardSchema = new Schema({
  rank: String,
  suit: String
})

CardSchema.methods = {
  rankValue: function(){
    return RANKS.indexOf(this.rank) + 1
  }
}
mongoose.model("Card", CardSchema)

var PlayerSchema = new Schema({
  name: String,
  hand: [CardSchema],
  chips: Number,
  currentBet: Number
})

var GameSchema = new Schema({
  players: [PlayerSchema],
  board: [CardSchema],
  deck: [CardSchema],
  pot: Number,
  currentPlayerID: ObjectId
})

var Card = mongoose.model("Card")

GameSchema.on('init', function(docs){
  var self = this
  console.log("hello")
  _.each(deck.cards, function(card){
    card = new Card({rank: card.rank, suit: card.suit})
    console.log(card)
    self.deck.push(card)
  })
})

mongoose.model("Player", PlayerSchema)
mongoose.model("Game", GameSchema)
