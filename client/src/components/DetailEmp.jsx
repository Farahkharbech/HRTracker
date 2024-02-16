import React from "react";

const OneEmp = ({oneEmp}) => (

  <div className="boxDetails">
     <img src={oneEmp.EmpImage} />

    <div className="Details" > Full Name : {oneEmp.empName}</div>
 
    <div className="Details"> Progression : {oneEmp.EmpProgression}</div>
          
    <div className="Details">  Rating : {oneEmp.rating} </div>

  </div>

);

export default OneEmp;
