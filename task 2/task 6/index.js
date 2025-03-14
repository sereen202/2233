const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your_database'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database');
});

connection.query('SELECT * FROM your_table', (err, results) => {
  if (err) throw err;
  console.log(results);
});

connection.end();
