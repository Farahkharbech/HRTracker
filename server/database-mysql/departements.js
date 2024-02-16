// const conn = require('./index.js');


// const readDep = (callback) => {
//     const sql = `select * from Departements`
//     conn.query(sql,(err,result)=>{callback(err,result)})
// }

// const createDep = (newDep,callback) => {
//     const sql = `insert into Departements set ?`
//     conn.query(sql,newDep,(err,result)=>{callback(err,result)})
// }

// const removeDep = (idDep,callback) => {
//     const sql = `delete from Departements where idDep = ${idDep}`
//     conn.query(sql,(err,result)=>{callback(err,result)})
// }
// const upDep = (idDep, newInfo,callback) =>{
//     const sql = `update Departements set ? where idDep = ${idDep}`
//     conn.query(sql,newInfo,(err,result)=>{callback(err,result)})
// }



// module.exports = {readDep,createDep,removeDep,upDep};

import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const departement = sequelize.define('departement', {
depName: DataTypes.STRING,
DepRating: DataTypes.STRING,
});

const departements = await departement.findAll();