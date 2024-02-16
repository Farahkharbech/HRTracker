const depRouter = require('express').Router();
const depController = require("../controllers/departements.js");




depRouter.get("/allDep", depController.allDep);
depRouter.post("/addDep", depController.addDep);
depRouter.delete("/deleteDep/:depId", depController.deleteDep);
depRouter.put("/updateDep/:depId",depController.updateDep)








module.exports = depRouter;
