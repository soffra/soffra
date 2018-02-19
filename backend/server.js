var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000);

// require('./climbDataDBConn')(app);
require('./DBConnection')();
require('./app')(app);