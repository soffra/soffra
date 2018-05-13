var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Soffra server listening on ${port}`);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'soffra/build')));

// require('./climbDataDBConn')(app);
require('./DBConnection')();
require('./app')(app);