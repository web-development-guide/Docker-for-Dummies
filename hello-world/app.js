const Express = require('express');

const app = Express();

app.get('/', function(req, res) {
  res.send('Hello World from API!');
});

app.listen(process.env.NODE_APP_PORT | 3000, function() {
  console.log('Hello World from Server!');
});
