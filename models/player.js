var PlayerSchema = require("../db/schema").PlayerSchema
var mongoose = require('mongoose')

mongoose.model("Player", PlayerSchema)
var PlayerModel = mongoose.model("Player")
module.exports = PlayerModel
