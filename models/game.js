var GameSchema = require("../db/schema").GameSchema
var Card = require("./card")
var Player = require("./player")
var mongoose = require('mongoose')
var _ =  require('underscore')

var Deck = require("./pokerLogic/deck")
deck = new Deck()

GameSchema.methods = {
  buildDeck: function(docs){
    var deck = new Deck()
    this.deck = _.map(deck.cards, function(card){
      return new Card({rank: card.rank, suit: card.suit})
    })
    console.log("deck built")
  },
  addPlayer: function(player){
    this.players.push(player)
  },
  // Person
  // .findOne({ name: 'Aaron' })
  // .populate('stories') // only works if we pushed refs to children
  // .exec(function (err, person) {
  //   if (err) return handleError(err);
  //   console.log(person);
  // })
  determineDealer: function(){
    var self = this
    var highCardPlayer
    console.log(self.constructor)
    self.constructor
      .findOne({_id: self._id})
      .populate("players")
      .exec(function(err, game){
        highCardPlayer = _.max(game.players,function(player){
          // return game.deck.shift().rankValue()
          var card = game.deck.shift()
          // TODO: find out why the decks cards are not mongoose objects from `./card.js file`
          newCard = new Card({rank: card.rank, value: card.value})
          return newCard.rankValue()
        })
        console.log("*********");
        highCardPlayer.dealer = true;
        highCardPlayer.save(function(err){if(!err){console.log("saved!")}})
        console.log(highCardPlayer)
      })
  },
  dealCard: function(player){
    if(player){
      console.log(player)
      player.hand.push(this.deck.shift())
    }else{
      this.board.push(this.deck.shift())
    }
  },
  dealPocket: function(){
    var NUM_CARDS_FOR_POCKET = 2
    for(var numCards = 0; numCards< NUM_CARDS_FOR_POCKET; numCards++){
      for(var playerIndex = 0; playerIndex < this.players.length; playerIndex++){
        this.dealCard(this.players[0])
      }
    }
  }
}

mongoose.model("Game", GameSchema)
var GameModel = mongoose.model("Game")
module.exports = GameModel
