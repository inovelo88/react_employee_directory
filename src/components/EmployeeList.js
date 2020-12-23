import React from "react";
import EmployeeCard from "./EmployeeCard"
function EmployeeList({ data }) {
  console.log(data);
  return (
    <>

      {data[0] !== undefined && data[0].name !== undefined ? (
        data.map(({ login, name, picture, location, email, dob }) => {
          return (
            <EmployeeCard
            photo={picture.medium}
            name={name.first}
            location={location}
            email={email}
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
