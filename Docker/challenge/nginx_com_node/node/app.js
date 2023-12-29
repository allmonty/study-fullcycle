const Express = require('express')
const MySQL = require('mysql2');
const Chance = require('chance')


const app = Express()
const port = 3000

const mysql_connection = MySQL.createConnection({
  host: "database",
  user: "root",
  password: "example",
  database: "example"
});

const chance = new Chance()

const sql_create_table = `
  CREATE TABLE IF NOT EXISTS people (
    name VARCHAR(255)
  );
`

const sql_create_random_name = `
  INSERT INTO people (name) VALUES ("?");
`

const sql_select_people = `
  SELECT * FROM people;
`

app.get('/', (req, res) => {
  mysql_connection.query(sql_create_table)
  mysql_connection.query(sql_create_random_name, [chance.name()])
  
  let body = '<h1>Full Cycle Rocks!</h1><br><ul>'

  mysql_connection.query(sql_select_people)
  .on('result', (result) => {
    body += '<li>' + result.name + '</li>'
  })
  .on('end', () => {
    body += '</ul>'

    res.send(body)
  })
})

app.listen(port, () => {
  console.log('Node server listening to ' + port)
})
