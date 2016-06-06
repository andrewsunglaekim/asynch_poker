var GameSchema = require("../db/schema").GameSchema
var Card = require("./card")
var mongoose = require('mongoose')
var _ =  require('underscore')

var Deck = require("./pokerLogic/deck")
deck = new Deck()

GameSchema.methods.buildDeck = function(docs){
  var deck = new Deck()
  this.deck = _.map(deck.cards, function(card){
    return new Card({rank: card.rank, suit: card.suit})
  })
  console.log("deck built")
}

mongoose.model("Game", GameSchema)
var GameModel = mongoose.model("Game")
module.exports = GameModel
