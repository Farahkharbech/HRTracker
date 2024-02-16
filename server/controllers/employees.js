
const {readEmp,createEmp,removeEmp,upEmp,readempBySup} = require('../database-mysql/employees.js')


const allEmp = (req,res) =>{
    readEmp((err,results)=>{err ?  res.status(500).send(err) : res.status(200).send(results)})
}

const empBySup = (req,res) => {
    readempBySup(req.params.Supervisors_idSup, (err,results)=>{err ? res.status(500).send(err) : res.status(200).send(results)})
}

const addEmp = (req,res) => {
    createEmp(req.body,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}

const deleteEmp = (req,res) => {
    removeEmp(req.params.empName,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}

const updateEmp = (req,res) => {
    upEmp(req.params.empName,req.body,(err,results)=> {err ?  res.status(500).send(err) : res.status(200).send(results)})
}

module.exports = { allEmp,addEmp,deleteEmp,updateEmp,empBySup};