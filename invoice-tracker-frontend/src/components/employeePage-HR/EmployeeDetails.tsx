import React, { useEffect, useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import { employeeType } from "./types";
import { FetchFacad } from "../../utils/FetchFacad";

const EmployeeDetails = () => {
  const fetchFacade = new FetchFacad();
  const dateFormat: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const [employee, setEmployee] = useState({
    englishName: "Mohamed Zaka",
    jobTitle: "DEV",
    mobileNumber: "01011750020",
    email: "mzakariia@cegedim.com",
    joiningDate: new Date(),
    endDate: new Date(),
    isResigned: false,
    allowedBalance: 21,
    remainingBalance: 15,
  });

  useEffect(() => {}, []);

  const [editEmployee, setEditEmployee] = useState(employee);
  const [edit, setEdit] = useState(false);
  const [resignedActive, setResignedActive] = useState(false);

  const resignedCheckBoxHandler = () => {
    setResignedActive(!resignedActive);
  };

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
      case "mobileNumber":
        newData = { mobileNumber: targetValue };
        break;
      case "email":
        newData = { email: targetValue };
        break;
      case "joiningDate":
        newData = { joiningDate: new Date(targetValue) };
        break;
      case "resigned":
        newData = { mobileNumber: targetValue };
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
    <div className="min-h-screen flex flex-row justify-between bg-lightGrey bg-opacity-20 pt-20 text-center">
      {/* div containing employee details */}
      <div className="flex flex-col ml-20 text-lg w-3/6 ">
        {/* div for image, title and name */}
        <div className="flex flex-row">
          <UserIcon className="w-40 bg-white shadow-lg" />
          <div className="flex flex-col justify-center ml-10 w-full whitespace-nowrap">
            {edit ? (
              <input
                className=" focus:border-blueCegedim focus:border-2 outline-none  text-lg mb-5 shadow-lg px-5 py-2 text-center"
                id="name"
                onChange={employeeChangeHandler}
                value={editEmployee.englishName}
                placeholder={employee.englishName}
              />
            ) : (
              <p className="mb-5 bg-white shadow-lg px-5 py-2">
                {employee.englishName}
              </p>
            )}
            {edit ? (
              <input
                className=" focus:border-blueCegedim focus:border-2 outline-none text-lg shadow-lg px-5 py-2 text-center"
                id="jobTitle"
                onChange={employeeChangeHandler}
                value={editEmployee.jobTitle}
                placeholder={employee.jobTitle}
              />
            ) : (
              <p className=" bg-white shadow-lg px-5 py-2">
                {employee.jobTitle}
              </p>
            )}
          </div>
        </div>
        {/* div for mobile number */}
        <div className="flex flex-row ml-1 mt-6 items-center ">
          <label className="whitespace-nowrap drop-shadow-md">
            Mobile number:
          </label>
          {edit ? (
            <input
              id="mobileNumber"
              className=" focus:border-blueCegedim focus:border-2 outline-none text-lg ml-12 shadow-lg px-5 py-2 text-center w-full"
              onChange={employeeChangeHandler}
              value={editEmployee.mobileNumber}
              placeholder={employee.mobileNumber}
            />
          ) : (
            <p className="bg-white shadow-lg ml-12 px-5 py-2 w-full">
              {employee.mobileNumber}
            </p>
          )}
        </div>
        {/* div for email */}
        <div className="flex flex-row ml-1 mt-6 items-center">
          <label className="whitespace-nowrap drop-shadow-md">Email: </label>
          {edit ? (
            <input
              id="email"
              className=" focus:border-blueCegedim focus:border-2 outline-none text-lg  shadow-lg  ml-28 px-5 py-2 text-center w-full"
              onChange={employeeChangeHandler}
              value={editEmployee.email}
              placeholder={employee.email}
            />
          ) : (
            <p className="bg-white shadow-lg ml-28 px-5 py-2 w-full">
              {employee.email}
            </p>
          )}
        </div>
        {/* {div for joining Date} */}
        <div className="flex flex-row ml-1 mt-6 items-center">
          <label className="whitespace-nowrap drop-shadow-md">
            Joining Date:
          </label>
          {edit ? (
            <input
              className=" focus:border-blueCegedim focus:border-2 outline-none text-lg shadow-lg  ml-20 px-5 py-2 text-center w-full"
              id="joiningDate"
              onChange={employeeChangeHandler}
              value={editEmployee.joiningDate?.toLocaleString(
                "en-US",
                dateFormat
              )}
              placeholder="Please enter data in the dd/mm/yyyy format"
            />
          ) : (
            <p className="bg-white shadow-lg ml-20 px-5 py-2 w-full">
              {employee.joiningDate?.toLocaleString("en-US", dateFormat)}
            </p>
          )}
        </div>
        {/* div for is resigned */}
        <div className="flex flex-row ml-1 mt-6 items-center">
          {edit ? (
            <>
              <label className="whitespace-nowrap drop-shadow-md">
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={resignedActive}
                  onChange={resignedCheckBoxHandler}
                />
                Is resigned
              </label>
              <input
                id="resigned"
                className=" focus:border-blueCegedim focus:border-2 outline-none text-lg shadow-lg  ml-20 px-5 py-2 text-center w-full"
                placeholder="Please enter data in the dd/mm/yyyy format"
                disabled={!resignedActive}
                onChange={employeeChangeHandler}
              />
            </>
          ) : (
            <>
              <label className="whitespace-nowrap drop-shadow-md">
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={employee.isResigned}
                />
                Is resigned
              </label>
              <p className="bg-white shadow-lg ml-20 px-5 py-2 w-full ">
                {employee.isResigned
                  ? employee.endDate?.toLocaleString("en-US", dateFormat)
                  : "not resigned"}
              </p>
            </>
          )}
        </div>
        {}
        <div className="flex flex-row ml-1 mt-6 items-center">
          <button
            className="mt-6 rounded bg-blueCegedim text-white py-2 px-5 w-fit"
            onClick={editClickHandler}
          >
            {edit ? "Save" : "Edit"}
          </button>
          {edit ? (
            <p className="ml-40 text-yellowDarkCegedim text-lg drop-shadow-md">
              You are now on the edit view. Click on the boxes to change the
              values.
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-3/6">
        <h3 className="text-2xl bg-blueCegedim text-white shadow-lg px-5 py-2">
          All absences
        </h3>
        <div className="flex flex-row mt-6 text-lg">
          <div className="flex flex-col items-center mr-8">
            <p className="bg-darkGrey px-5 py-2  text-white mb-3">Sick</p>
            <p className="bg-yellowDarkCegedim text-white rounded-full px-3 py-1 w-fit">
              0
            </p>
          </div>
          <div className="flex flex-col items-center mr-8">
            <p className="bg-darkGrey px-5 py-2  text-white mb-3">Emergency</p>
            <p className="bg-yellowDarkCegedim text-white rounded-full px-3 py-1 w-fit">
              0
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="bg-darkGrey px-5 py-2  text-white mb-3">Maternity</p>
            <p className="bg-yellowDarkCegedim text-white rounded-full px-3 py-1 w-fit">
              0
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <p className="text-2xl bg-darkGrey px-5 py-2  text-white mb-3">
            Annual Leaves
          </p>
          <p className="text-lg bg-yellowDarkCegedim text-white rounded-full px-3 py-1 w-fit">
            {employee.remainingBalance + "/" + employee.allowedBalance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
