var _ =  require('underscore')

var staticController = {
  home: function(req, res) {
    var currentUser = req.session.currentUser
    activeGames = currentUser.activeGames
    pendingActionGames = _.filter(activeGames, function(player){
      return player.pendingAction == true
    })
    res.render("static/home", {currentUser: currentUser, activeGames: activeGames, pendingActionGames: pendingActionGames})
  }
}

module.exports = staticController
