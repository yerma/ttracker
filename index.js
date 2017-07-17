const express = require('express');
const routes = require('./src/server/routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ttracker');
mongoose.Promise = global.Promise;

//static files
app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api', routes);

//error handling middleware
app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
  console.log("now listening");
});
