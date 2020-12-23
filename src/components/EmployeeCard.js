import React from "react";


function EmployeeCard(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.photo} />
      </div>
      <div className="content">
           <p> <strong>Name:</strong> {props.name}</p>
           <p> <strong>DOB:</strong> {props.dob.date}</p>
           <p><strong>Address:</strong> {props.location}</p>
           <p> <strong>Email:</strong> {props.email}</p>
           <p> <strong>Phone:</strong> {props.phone}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
