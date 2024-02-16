import React, {useState}from "react";


const AllDep = ({data,supsInOneDep,deleteDep,addDep,updateDep}) => {

    const [show,setShow] = useState(false) // to show and hide the inputs to add new Departement//
    const [showUpdate,setShowUpdate] = useState(0)
    const [newDep,setNewDep] = useState("")
    const [rateDep,setRateDep] = useState("")
    // const [image, setImage ] = useState("");
    // const [ url, setUrl ] = useState("");
 
    // const uploadImage = () => {
    //   const data = new FormData()
    //   data.append("file", image)
    //   data.append("upload_preset", "soloProject")
    //   data.append("cloud_name","dfvgavtio")
    //   fetch("  https://api.cloudinary.com/v1_1/dfvgavtio/image/upload",{
    //   method:"post",
    //   body: data
    //   })
    //   .then(resp => resp.json())
    //   .then(data => {setUrl(data.url) ;console.log(data)})
    //   .catch(err => console.log(err))}

     
return (
    <div>
    <h1 className='compName'>🅷🆁 🆃🆁🅰🅲🅺🅴🆁 <h3 className='Slogan'>The Key To Your Potential...</h3> </h1>
    <div>
{/* <div className="cloudinay">
<input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
<button onClick={uploadImage}>Upload</button>

</div>
<div>
<h1>Uploaded image will be displayed here</h1>
<img src={url}/>
</div> */}
</div>

    <div className="grid">
      {data.map ((el,i)=>
      <div className="grid" key={i}>
        <div className = "boxDep" >  

        <h1 className = "dep" onClick={()=>{supsInOneDep("sup",el.idDep)}} > {el.depName} </h1>
        <h2 className="Rating"> Rating : {el.DepRating}</h2>
        <button className="otherType" onClick={()=>{deleteDep(el.idDep)}}> Delete </button>
        <button className='otherType' onClick={()=>{setShowUpdate(el.idDep)}}> Update  </button>
        <div>{showUpdate===el.idDep && <div> 
      <input className='updateInp' placeholder='Rename Your Departement here ' onChange={(ev)=>{setNewDep(ev.target.value)}}/>
      <input className='updateInp' placeholder='change The Rate' onChange={(ev)=>{setRateDep(ev.target.value)}}/>
      <button className='otherType' onClick={()=>{updateDep(el.idDep,{depName : newDep, depRating : rateDep});setShowUpdate(0)}}> Validate </button>
          </div>}</div>
      </div>
      </div>
     )}
    </div>
    <div className="HomePageButtons">
    <div><button className='but' onClick={()=>{setShow(!show)}}> Add New Departement  </button>
    {show &&
    <div>
      <input className='newDepartement' placeholder='Name Your Departement here ' onChange={(ev)=>{setNewDep(ev.target.value)}}/>
      <input className='newDepartement' placeholder='Rate your Departement' onChange={(ev)=>{setRateDep(ev.target.value)}}/>
      <button className='otherType' onClick={()=>{addDep({depName : newDep, depRating : rateDep})}}> Validate </button>
    </div>}</div>
    </div>
    </div>)
  }
  
  export default AllDep;
  