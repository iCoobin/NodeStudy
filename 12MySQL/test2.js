var mysql  = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'kevin',
  password : '123',
  port: '3306',
  database: 'run_db', 
});

connection.connect();

var  sql = 'SELECT * FROM websites';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');
});

connection.end();
