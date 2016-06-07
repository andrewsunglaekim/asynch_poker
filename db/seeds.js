require("../helpers/arrayMethods")
require("../constants")
console.log(RANKS)
var _ =  require('underscore')
var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/poker')

var Card = require("../models/card")
var Player = require("../models/player")
var User = require("../models/user")
var Game = require("../models/game")

var Deck = require("../models/pokerLogic/deck")
deck = new Deck()

Card.remove({}, function(err){})
Player.remove({}, function(err){})
User.remove({}, function(err){})
Game.remove({}, function(err){})

// var backendDeck = _.map(deck.cards, function(card){
//   card = new Card({rank: card.rank, suit: card.suit})
//   card.save(function(err){})
//   return card
// })

var names = ["bob", "susy", "tom", "mary", "bree", "adriana", "tiffany", "daisy", "ted"]
var users = _.map(names, function(name){
  player = new User({
    email: null,
    username: name,
    chips: Math.floor(Math.random()*5000)
  })
  player.save(function(err){})
  return player
})


var NUM_GAMES = 5
var NUM_PLAYERS = 5
var NUM_CARDS_FOR_BOARD = 5

for(var i = 0; i < NUM_GAMES; i++){
  var currentPlayer;
  var random_users = (users.shuffle().slice(NUM_PLAYERS * -1))
  var players = []
  _.each(random_users, function(user){
    currentPlayer = new Player({
      name: user.name,
      chips: Math.floor(Math.random() * 500),
      currentBet: null,
      pendingAction: false
    })
    user.activeGames.push(currentPlayer)
    user.save(function(){})
    players.push(currentPlayer)
  })
  game = new Game({
    players: players,
    pot: null
  })
  game.save(function(err){
    if(!err)console.log("game saved");
  })
}


// game.buildDeck()
// game.save(function(err){})
// console.log(game.deck[51])
