var express = require('express');
var app = express();


https://github.com/EmileSchneider/4Chances1Day.git
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
  app.use(express.bodyParser());
  app.post('/', function(req, res) {
    console.log(req.body);
    res.send(200);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
r 
