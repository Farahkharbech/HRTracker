import React,{useState} from "react";


const Employees = ({oneSup,showDetailEmp,renderAllEmp,addEmp,refresh,setRefresh,deleteEmp}) =>{

    const [show,setShow] = useState(false)
    const [empImage, setEmpImage] = useState("")
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [depNumber,setDepNumber] = useState(0)
    const [supNumber,setSupNumber] = useState(0)
    const [prog,setProg] = useState("")
    const [rating, setRating] = useState("")


    const emp = {
        "EmpImage": empImage || "",
        "empName": name,
        "empJob": position,
        "EmpProgression": prog || "",
        "EmpRating":rating ||"",
        "Departements_idDep": depNumber,
        "Supervisors_idSup": supNumber,
      }

return(
  <div>
    <h2 className='depNames'> Employees </h2>


    <div className="grid">
    {oneSup.map((el,i)=>
        <div key={i}>
          <div className = "boxSup" >  
       
          <img className ="img" src={el.EmpImage}/>
          <div className = "sup">
              <h1 className="name" onClick={()=>{showDetailEmp("oneEmp",el)}}> {el.empName} </h1>
              <h2 className="job" > {el.empJob} </h2>
          </div>
          <button className="otherType" onClick={()=>{deleteEmp(el.idEmp);setRefresh(!refresh)}}> Say GoodBye </button> 
        </div>
        </div>
        )
    }
    </div>
    <button className='but' onClick={()=>{setShow(!show)}}> Welcome a new Employee </button>
    {show && <div> 
        <input className="input"
        type='text'
        placeholder='Employee"s Url Image'
        onChange={(e)=>setEmpImage(e.target.value)}
        />
        <input className="input"
        type='text'
        placeholder='Employee"s Name'
        onChange={(e)=>setName(e.target.value)}
        />
        <input className="input"
        type='text'
        placeholder='Employee"s Position'
        onChange={(e)=>setPosition(e.target.value)}
        />
         <input className="input"
        type='text'
        placeholder='If He"s not new, Describe his Progression'
        onChange={(e)=>setProg(e.target.value)}
        />
        <input className="input"
        type='text'
        placeholder='If He"s not new, Rate him'
        onChange={(e)=>setRating(e.target.value)}
        />
         <input className="input"
        type='text'
        placeholder='Departement Number'
        onChange={(e)=>setDepNumber(e.target.value)}
        />
         <input className="input"
        type='text'
        placeholder='Supervisor"s Number '
        onChange={(e)=>setSupNumber(e.target.value)}
        />
        <button className="otherType" onClick={()=>{addEmp(emp); setRefresh(!refresh); renderAllEmp("emp"); setShow(!show)}}> Join Employee </button></div>}
   </div>
)} ;

export default Employees;
