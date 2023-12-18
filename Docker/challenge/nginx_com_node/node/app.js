var mysql = require('mysql');

var con = mysql.createConnection({
  host: "database",
  user: "root",
  password: "example"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});