var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'soffra/build')));

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Soffra server listening on ${port}`);

// require('./climbDataDBConn')(app);
require('./DBConnection')();
require('./app')(app);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/soffra/build/index.html'));
  });