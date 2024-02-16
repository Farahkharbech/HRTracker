const {readSup,createSup,removeSup,upSup,supIndDep} = require('../database-mysql/supervisors.js')


const allSup = (req,res) =>{
    readSup((err,results)=>{err ?  res.status(500).send(err) : res.status(200).send(results)})
}
const getByDep = (req,res) => {
    supIndDep(req.params.Departements_idDep,(err,results)=>{
        err ?  res.send(err) : res.send(results)})
}
const addSup = (req,res) => {
    createSup(req.body,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}

const deleteSup = (req,res) => {
    removeSup(req.params.idSup,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}

const updateSup = (req,res) => {
    upSup(req.params.idSup ,req.body,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}


module.exports = { allSup,addSup,deleteSup,updateSup,getByDep};