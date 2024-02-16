const db = {};

db.departements = require('./departements.js')
db.employees = require('./employees.js')
db.supervisors = require('./supervisors.js')

module.exports = db;