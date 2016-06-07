var UserSchema = require("../db/schema").UserSchema
var mongoose = require('mongoose')

mongoose.model("User", UserSchema)
var UserModel = mongoose.model("User")
module.exports = UserModel
