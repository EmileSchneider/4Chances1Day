var express = require('express');
var app = express();
var bodyParser = require('body-parser')


https://github.com/EmileSchneider/4Chances1Day.git
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/', function(req, res) {
  console.log(req.body.user.name);
  console.log(req.body.user.email);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
