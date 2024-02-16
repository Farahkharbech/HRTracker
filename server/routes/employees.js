const empRouter = require('express').Router();
const empController = require("../controllers/employees.js");





empRouter.get("/allEmp", empController.allEmp);
empRouter.get("/empBySup/:Supervisors_idSup",empController.empBySup)
empRouter.post("/addEmp", empController.addEmp);
empRouter.delete("/deleteEmp/:empName", empController.deleteEmp);
empRouter.put("/updateEmp/:empName", empController.updateEmp);



module.exports = empRouter;
