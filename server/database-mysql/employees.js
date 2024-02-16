const conn = require('./index.js');

const readEmp = (callback) => {
    const sql = `select * from Employees`
    conn.query(sql,(err,result)=>{callback(err,result)})
}
const readempBySup = (idsup ,callback) => {
    const sql = `select * from Employees where Supervisors_idSup =${idsup} `
    conn.query(sql,(err,result)=>{callback(err,result)})
}

const createEmp = (newEmp,callback) => {
    const sql = `insert into Employees set ?`
    conn.query(sql,[newEmp],(err,result)=>{callback(err,result)})
}

const removeEmp = (idEmp,callback) => {
    const sql = `delete from Employees where idEmp = ${idEmp}`
    conn.query(sql,(err,result)=>{callback(err,result)})
}

const upEmp = (idEmp,newEmp, callback) => {
    const sql = `update Employees set ? where idEmp = ${idEmp}`
    conn.query(sql,newEmp, (err,result)=>{callback(err,result)})
}


module.exports = {readEmp,createEmp,removeEmp,upEmp,readempBySup};