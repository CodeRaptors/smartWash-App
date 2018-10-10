var mysql = require('mysql');

const connection = mysql.createConnection({
  host   : 'localhost',
  user   :  'root',
  password  : 'password',
  database  : 'smartWash'
});

 exports.whatever = function(callback) {
  connection.query('SELECT * FROM orders',(err,results,fields) => {
    if(err){
      callback(err, null);
    }else{
      callback(null, results);
    }
  );
};

module.exports.insertUser = insertUser;
