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

GameSchema.methods.buildDeck = function(docs){
  var deck = new Deck()
  this.deck = _.map(deck.cards, function(card){
    return new Card({rank: card.rank, suit: card.suit})
  })
  console.log("deck built")
}
