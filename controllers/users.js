var User = require("../models/user")

var usersController = {
  signup: function(req, res){
    res.render("users/signup")
  },
  login: function(req,res){
    res.render("users/login")
  },
  addUser: function(req,res){
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      chips: 500
    })
    user.save(function(err){
      if(!err){
        res.redirect("/")
      }
    })
  },
  signOut: function(req,res){

  }
}

module.exports = usersController
