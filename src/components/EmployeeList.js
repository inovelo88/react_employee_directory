import React from "react";
import EmployeeCard from "./EmployeeCard"

function EmployeeList({data}) {
  return (
    data.map(employee => (
      <EmployeeCard
      photo={employee.picture.thumbnail}
      name={employee.name.first+ "" + employee.name.last }
      title={employee.location}
      email={employee.email}
      />
    ))
  )
    }
export default EmployeeList;