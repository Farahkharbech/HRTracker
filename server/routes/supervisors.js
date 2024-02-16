const supRouter = require('express').Router();
const supController = require("../controllers/supervisors.js");

supRouter.get("/allSup", supController.allSup);
supRouter.get("/supByDep/:Departements_idDep", supController.getByDep);
supRouter.post("/addSup", supController.addSup);
supRouter.delete("/deleteSup/:idSup", supController.deleteSup);
supRouter.put("/updateSup/:idSup", supController.updateSup);

module.exports = supRouter;
