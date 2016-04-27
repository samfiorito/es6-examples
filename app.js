const 
  port = process.argv[2] || 3000,
  request = require('request'),
  express = require('express'),
  app = express();

require('./promises/promises.js')(app,request);
app.use(express.static('web'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});