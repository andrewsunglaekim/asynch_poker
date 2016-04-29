require ("../db/schema")
var mongoose = require('mongoose')

var PlayerModel = mongoose.model("Player")
module.exports = PlayerModel
