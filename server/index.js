var express = require('express');
var app = express();
var database = require('../database/data.js');

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

app.get('/orders',function(req,res){
  //call get oreders function
  database.whatever((err, results) => {
      if(err){
        res.sendStatus(500)
      }else{
        res.status(200).json(results);
        console.log("hola");

      }
  })
});

module.exports = app
