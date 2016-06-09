var usersController = {
  signup: function(req, res){
    res.render("users/signup")
  },
  login: function(req,res){
    res.render("users/login")
  }
}

module.exports = usersController
