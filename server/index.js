const express = require("express");
const cors = require('cors')
const depRouter = require('./routes/departments.js')
const supRouter = require('./routes/supervisors.js')
const empRouter = require('./routes/employees.js')
const db = require('./database-mysql/database.js');


const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/dep",depRouter);
app.use("/api/sup",supRouter);
app.use("/api/emp",empRouter);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
