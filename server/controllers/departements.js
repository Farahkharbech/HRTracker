const {readDep,createDep,removeDep,upDep} = require('../database-mysql/departements.js');



const allDep = (req,res) =>{
    readDep((err,results)=>{err ?  res.status(500).send(err) : res.status(200).send(results)})
}

const addDep = (req,res) => {
    createDep(req.body,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}

const deleteDep = (req,res) => {
    removeDep(req.params.depId,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}
const updateDep = (req,res) => {
    upDep(req.params.depId,req.body,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}


module.exports = { allDep,addDep,deleteDep,updateDep};