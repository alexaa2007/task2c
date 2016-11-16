var cors = require('cors');
var express = require('express');

var app = express();
app.use(cors());

app.get('/', function (req, res) {
  let result = '';

  const un = req.query.username;

  if (typeof un === 'undefined' || un.length === 0) {
    console.log('We got undefined username');
    return res.send('Invalid username');
  }

  console.log('We get:' + un);
  let re = new RegExp();

  re = /((https?:?)?(\/\/)?([A-z0-9\-]+\.?){2,}?(\/))?(@?\w+(\.\w+)?)/;
  result = un.match(re)[6];

  if (result[0] !== '@') {
    result = '@' + result;
  }

  console.log('Result:' + result);
  res.send(String(result));
  console.log('------');
});

app.listen(3001, function() {
  console.log('Listening on 3001 port.');
});
