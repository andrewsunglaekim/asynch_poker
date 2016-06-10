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

var NUM_PLAYERS = 5
var demoUser = new User({
  email: "demo@demo.com",
  username: "demo",
  chips: 1000
})

var demoUserActiveGames = []
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

// demo action - check
var random_users = (users.shuffle().slice(NUM_PLAYERS * -1))
var demoCheckPlayer = new Player({
  name: "demo check",
  chips: 1000,
  currentBet: 0,
  pendingAction: true,
  dealer: false
})
demoCheckPlayer.save(function(){})
demoUserActiveGames.push(demoCheckPlayer)

var checkDemoGame = new Game({
  pot: 600
})
var players = []
_.each(random_users, function(user){
  var currentPlayer = new Player({
    name: user.username,
    chips: Math.floor(Math.random() * 500),
    currentBet: null,
    pendingAction: null
  })
  currentPlayer.save(function(){})
  user.activeGames.push(currentPlayer)
  user.save(function(){})
  players.push(currentPlayer)
})
checkDemoGame.players = players
checkDemoGame.players.push(demoCheckPlayer)
checkDemoGame.save(function(){})

// demo pockets
var random_users = (users.shuffle().slice(NUM_PLAYERS * -1))
var demoPocketsPlayer = new Player({
  name: "demo pockets",
  chips: 1000,
  currentBet: 500,
  pendingAction: true,
  dealer: false
})
demoPocketsPlayer.save(function(){})
demoUserActiveGames.push(demoPocketsPlayer)

var pocketsDemoGame = new Game({
  pot: 600
})
var players = []
_.each(random_users, function(user){
  var currentPlayer = new Player({
    name: user.username,
    chips: Math.floor(Math.random() * 500),
    currentBet: null,
    pendingAction: null
  })
  currentPlayer.save(function(){})
  user.activeGames.push(currentPlayer)
  user.save(function(){})
  players.push(currentPlayer)
})
pocketsDemoGame.players = players
pocketsDemoGame.players.push(demoPocketsPlayer)
pocketsDemoGame.save(function(err){
  if(!err){
    console.log("pockets game saved");
  }
})

// demo flop
var random_users = (users.shuffle().slice(NUM_PLAYERS * -1))
var demoFlopPlayer = new Player({
  name: "demo flop",
  chips: 1000,
  currentBet: null,
  pendingAction: false,
  dealer: false
})
demoFlopPlayer.save(function(){})
demoUserActiveGames.push(demoFlopPlayer)

var flopDemoGame = new Game({
  pot: 600
})
var players = []
_.each(random_users, function(user){
  var currentPlayer = new Player({
    name: user.username,
    chips: Math.floor(Math.random() * 500),
    currentBet: null,
    pendingAction: null
  })
  currentPlayer.save(function(){})
  user.activeGames.push(currentPlayer)
  user.save(function(){})
  players.push(currentPlayer)
})
flopDemoGame.players = players
flopDemoGame.players.push(demoFlopPlayer)
flopDemoGame.save(function(err){
  if(!err){
    console.log("flop game saved");
  }
})

// demo turn
var random_users = (users.shuffle().slice(NUM_PLAYERS * -1))
var demoTurnPlayer = new Player({
  name: "demo turn",
  chips: 1000,
  currentBet: 500,
  pendingAction: true,
  dealer: false
})
demoTurnPlayer.save(function(){})
demoUserActiveGames.push(demoTurnPlayer)

var turnDemoGame = new Game({
  pot: 600
})
var players = []
_.each(random_users, function(user){
  var currentPlayer = new Player({
    name: user.username,
    chips: Math.floor(Math.random() * 500),
    currentBet: null,
    pendingAction: null
  })
  currentPlayer.save(function(){})
  user.activeGames.push(currentPlayer)
  user.save(function(){})
  players.push(currentPlayer)
})
turnDemoGame.players = players
turnDemoGame.players.push(demoTurnPlayer)
turnDemoGame.save(function(err){
  if(!err){
    console.log("turn game saved");
  }
})

demoUser.activeGames = demoUserActiveGames
demoUser.save(function(err){})

// demo river
var random_users = (users.shuffle().slice(NUM_PLAYERS * -1))
var demoRiverPlayer = new Player({
  name: "demo river",
  chips: 1000,
  currentBet: null,
  pendingAction: false,
  dealer: false
})
demoRiverPlayer.save(function(){})
demoUserActiveGames.push(demoRiverPlayer)

var riverDemoGame = new Game({
  pot: 600
})
var players = []
_.each(random_users, function(user){
  var currentPlayer = new Player({
    name: user.username,
    chips: Math.floor(Math.random() * 500),
    currentBet: null,
    pendingAction: null
  })
  currentPlayer.save(function(){})
  user.activeGames.push(currentPlayer)
  user.save(function(){})
  players.push(currentPlayer)
})
riverDemoGame.players = players
riverDemoGame.players.push(demoRiverPlayer)
riverDemoGame.save(function(err){
  if(!err){
    console.log("river game saved");
  }
})
