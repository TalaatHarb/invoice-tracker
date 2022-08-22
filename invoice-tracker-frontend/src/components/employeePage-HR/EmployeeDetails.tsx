import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import { employeeType } from "./types";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState<employeeType>({
    englishName: "Mohamed Zaka",
    jobTitle: "DEV",
  });
  const [editEmployee, setEditEmployee] = useState(employee);
  const [edit, setEdit] = useState(false);

  const employeeChangeHandler = (event: any) => {
    const targetId = event.target.id;
    const targetValue = event.target.value;
    let tempEmployee = { ...editEmployee };
    let newData = {};
    switch (targetId) {
      case "name":
        newData = { englishName: targetValue };
        break;
      case "jobTitle":
        newData = { jobTitle: targetValue };
        break;
    }
    tempEmployee = { ...tempEmployee, ...newData };
    setEditEmployee(tempEmployee);
  };

  const editClickHandler = () => {
    if (edit) {
      setEmployee(editEmployee);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <UserIcon className="w-8" />
            <div className="flex flex-col">
              {edit ? (
                <input
                  id="name"
                  onChange={employeeChangeHandler}
                  value={editEmployee.englishName}
                  placeholder={employee.englishName}
                />
              ) : (
                <p>{employee.englishName}</p>
              )}
              {edit ? (
                <input
                  id="jobTitle"
                  onChange={employeeChangeHandler}
                  value={editEmployee.jobTitle}
                  placeholder={employee.jobTitle}
                />
              ) : (
                <p>{employee.jobTitle}</p>
              )}
            </div>
          </div>
          <button onClick={editClickHandler}>{edit ? "Save" : "Edit"}</button>
        </div>
      </div>
      <div className="flex flex-col">
        <h3>All absences</h3>
      </div>
    </div>
  );
};

export default EmployeeDetails;
