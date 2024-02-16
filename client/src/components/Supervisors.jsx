import React,{useState,useEffect} from "react";
import axios from "axios";


const Supervisors = ({oneDep,EmpsInOneSup,deleteSup,addSup,refresh,setRefresh}) => {

    const [show,setShow] = useState(false)
    const [supImage, setSupImage] = useState("") // state to create supervisor's image //
    const [name, setName] = useState("") // state to create supervisor's name //
    const [position, setPosition] = useState("")// state to create supervisor's job//
    const [departement,setDepartement] = useState(0) // state to create supervisor's dep Id //
    const [showUpdate,setShowUpdate] = useState(0)
    const [newname,setNewname] = useState("") // state to update supervisor's name //
    const [job,setJob] = useState("")  // state to update Supervisor's job //


    const sup = {
        "supImage": supImage || "",
        "supName": name,
        "supJob": position,
        "Departements_idDep": departement
      }
                     
    return (
<div>
    <h2 className='depNames'> Supervisors </h2>

    <div className="grid">
    {oneDep.map((el,i)=>
        <div key={i}>
          <div className = "boxSup" >  
          <img className ="img" src={el.supImage}/>
          <div className = "sup" onClick={()=>{EmpsInOneSup("emp",el.idSup)}}>
              <h1 className="name"> {el.supName} </h1>
              <h2 className="job" > {el.supJob} </h2>
          </div>
          <button className="otherType" onClick={()=>{deleteSup(el.idSup)}}> Delete </button>
          <button className="otherType" onClick={()=>{setShowUpdate(el.idSup)}}> Update </button>
          <div>{showUpdate===el.idSup && <div> 
      <input className='updateInp' placeholder='Rename Supervisor here ' onChange={(ev)=>{setNewname(ev.target.value)}}/>
      <input className='updateInp' placeholder='change His Position' onChange={(ev)=>{setJob(ev.target.value)}}/>
      <button className='otherType' onClick={()=>{updateDep(el.idSup,{supName : newname, supJob : job});setShowUpdate(0)}}> Validate </button>
          </div>}</div>
        </div>
        </div>
        )
    }
     </div>
     <button className='but' onClick={()=>{setShow(!show)}}> Add Supervisor in This Departement </button>
     {show && <div> 
        <input className="input"
        type='text'
        placeholder='Supervisor"s Name'
        onChange={(e)=>setName(e.target.value)}
        />
        <input className="input"
        type='text'
        placeholder='Position'
        onChange={(e)=>setPosition(e.target.value)}
        />
         <input className="input"
        type='text'
        placeholder='Departement Number'
        onChange={(e)=>setDepartement(e.target.value)}
        />
        <button className="otherType" onClick={()=>{addSup(sup); setRefresh(!refresh); }}> Join the Supervisor </button></div>}
   </div>
    )
};

export default Supervisors;
