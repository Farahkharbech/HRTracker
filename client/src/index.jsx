import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Departements from './components/Departements.jsx';
import Supervisors from './components/Supervisors.jsx';
import Employees from './components/Employees.jsx';
import DetailEmp from './components/DetailEmp.jsx';
import axios from 'axios';

const App = () => {
  const [departData, setDepartData] = useState([]) // State to get all departement in the home page//
  const [view,setView] = useState('dep') // To manage the views in my front project//
  const [oneDep,setOneDep] = useState([]) // To get the supervisors when clicking on one departement //
  const [oneSup,setOneSup] = useState([])  // To get all employees under one Supervisors //
  const [allSup,setAllSup] = useState([]) // To fetch all Supervisors when clicking on All Supervisors//
  const [oneEmp,setOneEmp] = useState({}) // To get details of one Employee when clicking on his name //
  const [refresh,setRefresh] = useState(false)


  

                   // Interact with Departements //

  //Fetch All departements in home page //                 
  useEffect(()=>{
    axios.get("http://localhost:3000/api/dep/allDep").then((res)=>{
    setDepartData(res.data)})
    .catch((err)=>{console.log(err)})
  },[refresh])

  //Fetch Supervisors in One selected departement //    
  const supsInOneDep = (view,idDep) => {
    setView(view)
    axios.get(`http://localhost:3000/api/sup/supByDep/${idDep}`).then((res)=>{setOneDep(res.data)})
    .catch((err)=>{console.log(err)})
  }

  const renderAllDep = (view) => {
    setView(view)
    axios.get(`http://localhost:3000/api/dep/allDep`).then((res)=>{
    setRefresh(!refresh)})
    .catch((err)=>{console.log(err)})}

  //Delete departement from Home page//
  const deleteDep = (idDep) => {
    axios.delete(`http://localhost:3000/api/dep/deleteDep/${idDep}`).then((res)=>{setRefresh(!refresh)})
    .catch((err)=>{console.log(err)})
  }
  // Add new Departement //
  const addDep = (newDep) =>{
    axios.post("http://localhost:3000/api/dep/addDep",newDep).then((res)=>{setRefresh(!refresh)})
    .catch((err)=>{console.log(err)})
  }
  // Update departement // 
  const updateDep = (idDep,newInfo) =>{
    axios.put(`http://localhost:3000/api/dep/updateDep/${idDep}`,newInfo).then((res)=>{
    renderAllDep("dep")  
    setRefresh(!refresh)
   })
    .catch((err)=>{console.log(err)})
  }
 



                    // Interact with Supervisors //

  // fetch all employees of one selected supervisor //                  
  const EmpsInOneSup = (view,idSup) =>{
    setView(view)
    axios.get(`http://localhost:3000/api/emp/empBySup/${idSup}`).then((res)=>{setOneSup(res.data)})
    .catch((err)=>{console.log(err)})
  }

// Get All Supervisors in the company by clicking in the home page //
  const renderAllSup = (view) => {
    setView(view)
    axios.get(`http://localhost:3000/api/sup/allSup`).then((res)=>{
    setRefresh(!refresh)  
    setAllSup(res.data)})
    .catch((err)=>{console.log(err)})}

 
    // Add new Supervisor to all Supervisors //
    const addSup=(newSup)=>{
      axios.post("http://localhost:3000/api/sup/addSup",newSup)
       .then((res)=>{
        renderAllSup("allSup")
        setRefresh(!refresh)})
       .catch((err)=>{console.log(err)})
   }
// delete Supervisor //
   const deleteSup = (idSup) => {
    axios.delete(`http://localhost:3000/api/sup/deleteSup/${idSup}`).then((res)=>{
      renderAllSup("allSup")
      setRefresh(!refresh) })
      .catch((err)=>{console.log(err)})}
  // update supervisor // 
  const updateSup = (idSup,info) => {
    axios.put(`http://localhost:3000/api/sup/updateSup/${idSup}`,info).then((res)=>{
      renderAllSup("allSup")
      setRefresh(!refresh) })
      .catch((err)=>{console.log(err)})}  


// Interact with Employees //

// Get All Employees in the company by clicking in the home page //
    const renderAllEmp = (view) => {
      setView(view)
      axios.get(`http://localhost:3000/api/emp/allEmp`).then((res)=>{setOneSup(res.data)})
      .catch((err)=>{console.log(err)})
    }
//Add new Employee //
const addEmp = (newEmp) =>{
  
  axios.post("http://localhost:3000/api/emp/addEmp",newEmp).then((res)=>{
    renderAllEmp("emp")  
  setRefresh(!refresh)})
  .catch((err)=>{console.log(err)})
}

// Get details of one selected Emp  by clicking in the Employees view //   
    const showDetailEmp = (view,employee) =>{
      setView(view)
      setOneEmp(employee)
    }
// delete Employee //
const deleteEmp = (idEmp) => {
  console.log("test")
  axios.delete(`http://localhost:3000/api/emp/deleteEmp/${idEmp}`).then((res)=>{renderAllEmp("emp")
    setRefresh(!refresh) })
    .catch((err)=>{console.log(err)})}



const renderView = () => {
  if(view === "sup") {
    return <Supervisors oneDep={oneDep} EmpsInOneSup={EmpsInOneSup} deleteSup={deleteSup}  addSup ={addSup} refresh={refresh} setRefresh={setRefresh} />
  }
  else if (view === "emp") {
    return <Employees oneSup={oneSup} showDetailEmp={showDetailEmp} addEmp={addEmp} refresh={refresh} setRefresh={setRefresh} deleteEmp={deleteEmp} />
  }
  else if(view === "dep") {
    return  <Departements data = {departData} supsInOneDep={supsInOneDep} deleteDep = {deleteDep} addDep={addDep} updateDep={updateDep} refresh={refresh} setRefresh={setRefresh}/>
  }
  else if(view ==="allSup") {
    return <Supervisors oneDep={allSup} deleteSup={deleteSup} EmpsInOneSup={EmpsInOneSup} addSup ={addSup}  refresh={refresh} setRefresh={setRefresh}  />
  }
  else if(view ==="oneEmp") {
    return <DetailEmp oneEmp={oneEmp}/>
  }
}  

  return (
    <div>
       <div>
      <div> {renderView()} </div>

      <div className='HomePageButtons'>
      <button className='but' onClick={()=>{renderAllSup("allSup")}}> All Supervisors </button>
         <button className='but' onClick={()=>{renderAllEmp("emp")}}> All Employees </button>
      </div>
        
     </div>

</div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
