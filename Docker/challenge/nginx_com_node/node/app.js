const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql');
const mysql_connection = mysql.createConnection({
  host: "database",
  user: "root",
  password: "example",
  database: "example"
});

app.get('/', (req, res) => {
  mysql_connection.connect(function(err) {
    if (err) throw err;

    res.send('<h1>Connected</h1>')
  });
})

app.listen(port, () => {
  console.log('Node server listening to ' + port)
})