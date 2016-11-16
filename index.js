var cors = require('cors');
var express = require('express');

var app = express();
app.use(cors());

app.get('/', function (req, res) {
  const un = req.query.username;
  let result = '';

  if (un.length === 0) {
    return res.send('Invalid username');
  }

  console.log('We get:' + un);
  let re = new RegExp();
  re = /((https?:?)?(\/\/)?(\w+\.?){2,}?(\/))?(\w+)/;

  result = '@' + un.match(re)[6];
  console.log('Result:' + result);
  res.send(String(result));
});

app.listen(3001, function() {
  console.log('Listening on 3001 port.');
});
