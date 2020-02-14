const bodyParser = require('body-parser');

const Express = require('express');

const app = Express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/movies', function(req, res) {
  res.send({
    count: 3,
    models: [
      '3 Idiots',
      '2 States',
      'Kai Po Che',
    ],
  });
});

app.listen(process.env.NODE_PORT, function() {
  console.log('App started');
});
