var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '39.108.52.31',
  user     : 'kevin',
  password : '123',
  database : 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
