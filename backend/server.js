var nunjucks        = require('nunjucks');
var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    dotenv          = require('dotenv'),
    bodyParser      = require('body-parser');

var app = express();

dotenv.load();

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(express.logger('dev'));
  app.use(errorhandler())
}

app.use(require('./anonymous-routes'));
app.use(require('./protected-routes'));
app.use(require('./user-routes'));

// Use nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

// Render nunjucks routes
app.get('/', function(req, res) {
  res.render('pages/index.html');
});

app.get('/login', function(req, res) {
  res.render("pages/index.html");
});

app.get('/home', function(req, res) {
  res.render("pages/index.html");
});

app.get('/style-guide.html', function(req, res) {
  res.render("pages/style-guide.html");
});

// Allow assets from public to be used
app.use(express.static('../public'));

var port = process.env.PORT || 3001;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

