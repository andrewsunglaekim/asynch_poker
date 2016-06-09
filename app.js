var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var session = require('express-session')
var cmongo  = require('connect-mongo/es5')
var SMongo  = cmongo(session)
var methodOverride = require('method-override')
var staticController = require("./controllers/static")
var session = require('express-session')
var app = express()

mongoose.connect('mongodb://localhost/reminders')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))

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


app.get('/', function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})
