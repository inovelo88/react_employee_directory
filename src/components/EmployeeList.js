import React from "react";
import EmployeeCard from "./EmployeeCard"
function EmployeeList({ data }) {
  console.log(data);
  return (
    <>

      {data[0] !== undefined && data[0].name !== undefined ? (
        data.map(({ dob, name, picture, location, email, phone}) => {
          return (
            <EmployeeCard
            photo={picture.medium}
            name={name.first + " " + name.last}
            dob={dob}
            location={location.city + ", " + location.state}
            email={email}
            phone={phone}
            />
          );
        })
      ) : (
        <div>
            <h1> No Results</h1>
            </div>
      )}
  
    </>
  )
}
export default EmployeeList;
