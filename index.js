const path = require('path');
const express = require('express');
const routes = require('./src/server/routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ttracker');
mongoose.Promise = global.Promise;

//static files
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

//initialize routes
app.use('/api', routes);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

//error handling middleware
app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error: err.message});
});

var port = process.env.port || 8080;
app.listen(port, function(){
  console.log("now listening on port " + port);
});
