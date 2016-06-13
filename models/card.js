var CardSchema = require("../db/schema").CardSchema
var mongoose = require('mongoose')
require("../constants")

CardSchema.methods = {
  rankValue: function(){
    return RANKS.indexOf(this.rank) + 1
  }
}

mongoose.model("Card", CardSchema)
var CardModel = mongoose.model("Card")
module.exports = CardModel
