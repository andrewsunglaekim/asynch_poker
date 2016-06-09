var User = require("../models/user")

var usersController = {
  getSignup: function(req, res){
    res.render("users/signup")
  },
  postSignup: function(req,res){
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      chips: 500
    })
    user.save(function(err){
      if(!err){
        req.session.currentUser = user
        res.redirect("/")
      }
    })
  },
  getLogin: function(req,res){
    res.render("users/login")
  },
  postLogin: function(req, res){
    User.findOne({username: req.body.username}, function(err, user){
      req.session.currentUser = user
      res.redirect('/')
    })
  },
  signOut: function(req,res){

  }
}

module.exports = usersController
