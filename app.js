var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var session = require('express-session')
var cmongo  = require('connect-mongo/es5')
var SMongo  = cmongo(session)
var methodOverride = require('method-override')
var staticController = require("./controllers/static")
var usersController = require("./controllers/users")
var session = require('express-session')
var app = express()

mongoose.connect('mongodb://localhost/poker')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))

// TODO: export secret to json to be git ignored
app.use(session({
  secret: "bob",
  resave: false,
  saveUninitialized: false,
  store: new SMongo({
    mongooseConnection: mongoose.connection
  })
}))

app.listen(4000, function(){
  console.log("app listening on port 4000")
})


app.get('/', staticController.home)
app.get('/signup', usersController.getSignup)
app.post('/signup', usersController.postSignup)
app.get('/login', usersController.getLogin)
app.post('/login', usersController.postLogin)
