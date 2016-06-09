var staticController = {
  home: function(req, res) {
    // var sess = req.session
    res.send("home")
  }
}

module.exports = staticController
