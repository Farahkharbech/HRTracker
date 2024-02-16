const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'farahkh',
  database : 'HRTracker'
});


connection.connect((err)=>{err ? console.log(err) : console.log("SoloProject DB successfully connected !")})

module.exports = connection;