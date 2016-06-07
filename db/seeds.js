require("../helpers/helper")
require("../constants")
console.log(RANKS)
var _ =  require('underscore')
var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/poker')

var Card = require("../models/card")
var Player = require("../models/player")
var Player = require("../models/user")
var Game = require("../models/game")

var Deck = require("../models/pokerLogic/deck")
deck = new Deck()

Card.remove({}, function(err){})
Player.remove({}, function(err){})
Game.remove({}, function(err){})
User.remove({}, function(err){})

var backendDeck = _.map(deck.cards, function(card){
  card = new Card({rank: card.rank, suit: card.suit})
  card.save(function(err){})
  return card
})

var names = ["bob", "susy", "tom", "mary", "bree", "adriana", "tiffany", "daisy", "ted"]
var users = _.map(names, function(name){
  player = new User({
    username: name,
    hand: [],
    chips: Math.floor(Math.random()*5000),
    currentBet: null
  })
  player.save(function(err){})
  return player
})

var NUM_GAMES = 5
var NUM_PLAYERS = 5
var NUM_CARDS_FOR_BOARD = 5

for(var i = 0; i < NUM_GAMES; i++){
  var currentGamePlayers = players.shuffle().slice(NUM_PLAYERS * -1)
  var currentPlayerID = currentGamePlayers[0]._id
  var game = new Game({
    players: players.shuffle().slice(NUM_PLAYERS * -1),
    board: backendDeck.shuffle().slice(NUM_CARDS_FOR_BOARD * -1),
    pot: Math.floor(Math.random() * 1500),
    currentPlayerID:currentPlayerID
  })
  game.save(function(err){})
}

console.log(game)
game.buildDeck()
game.save(function(err){})
console.log(game.deck[51])
