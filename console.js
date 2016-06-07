require("./helpers/helper")
var repl = require("repl");
var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/poker')
var Card = require("./models/card")
var Player = require("./models/player")
var Game = require("./models/game")
var User = require("./models/user")

var replServer = repl.start({
  prompt: "Express Console > "
})

replServer.context.Card = Card;
replServer.context.Player = Player;
replServer.context.User = User;
replServer.context.Game = Game;
