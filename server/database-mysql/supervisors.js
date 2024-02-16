const conn = require('./index.js');

const readSup = (callback) => {
    const sql = `select * from Supervisors`
    conn.query(sql,(err,result)=>{callback(err,result)})
}
const supIndDep = (iddep,callback) => {
    const sql = `select * from Supervisors where Departements_idDep = ${iddep}`
    conn.query(sql,(err,result)=>{callback(err,result)})
}

const createSup = (newSup,callback) => {
    const sql = `insert into Supervisors set ?`
    conn.query(sql,[newSup],(err,result)=>{callback(err,result)})
}

const removeSup = (idSup,callback) => {
    const sql = `delete from Supervisors where idSup= "${idSup}"`
    conn.query(sql,(err,result)=>{callback(err,result)})
}

const upSup = (idSup,newSup,callback) => {
    const sql = `update Supervisors set ? where idSup = ${idSup}`
    conn.query(sql,newSup,(err,result)=>{callback(err,result)})
}

module.exports = {readSup,createSup,removeSup,upSup,supIndDep};