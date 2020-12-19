import React from "react";


function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
           <p> <strong>Name:</strong> {props.name}</p>
           <p><strong>Title:</strong> {props.title}</p>
           <p><strong>Address:</strong> {props.location}</p> 
      </div>
    </div>
  );
}

export default EmployeeCard;
