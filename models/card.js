require ("../db/schema")
var mongoose = require('mongoose')

var CardModel = mongoose.model("Card")
module.exports = CardModel
