// Dependencies
const mysql = require('mysql')
// MySql connection object
let connection

if (process.env.JAWSDB_URL) {
  // Heroku DB
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db',
  })
}

// MySql connection
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error: ' + err.stack + '\n\n')
    return
  }
  console.log(
    'Connected to MySql database as id ' + connection.threadId + '\n\n'
  )
})

module.exports = connection
