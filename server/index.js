var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/chords', (req, res) => {
	console.log(req.body);
	res.send('response: test');
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});