var staticController = {
  home: function(req, res) {
    // var sess = req.session
    res.render("static/home", {currentUser: req.session.currentUser})
  }
}

module.exports = staticController
