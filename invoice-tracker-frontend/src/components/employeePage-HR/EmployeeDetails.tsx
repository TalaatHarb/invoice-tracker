import React, { useEffect, useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import axios from "axios";
import { employeeType } from "./types";
import { useAppSelector } from "../../hooks/toolkit-types";
import formatDate from "../../utils/FormatDate";
import { CONSTANTS } from "../../utils/constants";
type employeeDetailsProps = {
  id: number;
};

const EmployeeDetails = ({ id }: employeeDetailsProps) => {
  const isAuthenticated: any = useAppSelector(
    (state) => state.AuthenticationSlice.isAuthenticated
  );

  const updateEmployeeUrl = `${CONSTANTS.BACKEND_URL}/api/user/update/${id}`;
  const dateFormat: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const [employee, setEmployee] = useState<employeeType>({
    englishName: "Mohamed Zaka",
    jobTitle: "DEV",
    mobileNumber: "01011750020",
    email: "mzakariia@cegedim.com",
    joiningDate: new Date(),
    endDate: new Date(),
    resigned: false,
    allowedBalance: 21,
    remainingBalance: 15,
  });
  const [editEmployee, setEditEmployee] = useState<employeeType>(employee);
  const [edit, setEdit] = useState<boolean>(false);
  const [resignedActive, setResignedActive] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${CONSTANTS.BACKEND_URL}/api/user?ID=${id}`, {
          headers: { Authorization: `Bearer ${isAuthenticated}` },
        })
        .then((response) => {
          setEmployee(response.data);
          setEditEmployee(response.data);
        });
    };
    getData();
    console.log(employee);
    console.log(formatDate(employee.joiningDate));
  }, []);

  const resignedCheckBoxHandler = () => {
    setResignedActive(!resignedActive);
  };

  const employeeChangeHandler = (event: any) => {
    const targetId = event.target.id;
    const targetValue = event.target.value;
    let tempEmployee = { ...editEmployee };
    let newData = {};
    switch (targetId) {
      case "nameEdit":
        newData = { englishName: targetValue };
        break;
      case "jobTitleEdit":
        newData = { jobTitle: targetValue };
        break;
      case "mobileNumberEdit":
        newData = { mobileNumber: targetValue };
        break;
      case "emailEdit":
        newData = { email: targetValue };
        break;
      case "joiningDateEdit":
        newData = { joiningDate: new Date(targetValue) };
        break;
      case "resignedEdit":
        newData = { endDate: targetValue, resigned: true };
        break;
    }
    tempEmployee = { ...tempEmployee, ...newData };
    setEditEmployee(tempEmployee);
  };

  const editClickHandler = async (event: any) => {
    const id = event.target.id;
    if (id == "cancel") {
      setEditEmployee(employee);
      setEdit(false);
    } else if (id == "save") {
      await axios
        .put(
          updateEmployeeUrl,
          {},
          {
            headers: { Authorization: `Bearer ${isAuthenticated}` },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            setEmployee(editEmployee);
          } else {
            setEditEmployee(employee);
            setUpdateError(true);
            setTimeout(() => {
              setUpdateError(false);
            }, 10000);
          }
          setEdit(false);
        })
        .catch(() => {
          setUpdateError(true);
          setTimeout(() => {
            setUpdateError(false);
          }, 10000);
          setEdit(false);
          setEditEmployee(employee);
        });
    } else {
      setEdit(true);
    }
  };

  return (
    <div className="ml-20 flex flex-row justify-between py-20 text-center">
      {/* div containing employee details */}
      <div className="flex flex-col ml-20 text-lg w-3/6 ">
        {/* div for image, title and name */}
        <div className="flex flex-row">
          <UserIcon className="w-40 bg-white shadow-lg" />
          <div className="flex flex-col justify-center ml-10 w-full whitespace-nowrap">
            {edit ? (
              <input
                className=" focus:border-blueCegedim focus:border-2 outline-none  text-lg mb-5 shadow-lg px-5 py-2 text-center"
                id="nameEdit"
                onChange={employeeChangeHandler}
                value={editEmployee.englishName}
                placeholder={employee.englishName}
              />
            ) : (
              <p id="name" className="mb-5 bg-white shadow-lg px-5 py-2">
                {employee.englishName}
              </p>
            )}
            {edit ? (
              <input
                className=" focus:border-blueCegedim focus:border-2 outline-none text-lg shadow-lg px-5 py-2 text-center"
                id="jobTitleEdit"
                onChange={employeeChangeHandler}
                value={editEmployee.jobTitle}
                placeholder={employee.jobTitle}
              />
            ) : (
              <p id="jobTitle" className=" bg-white shadow-lg px-5 py-2">
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
              id="mobileNumberEdit"
              className=" focus:border-blueCegedim focus:border-2 outline-none text-lg ml-12 shadow-lg px-5 py-2 text-center w-full"
              onChange={employeeChangeHandler}
              value={editEmployee.mobileNumber}
              placeholder={employee.mobileNumber}
            />
          ) : (
            <p
              id="mobileNumber"
              className="bg-white shadow-lg ml-12 px-5 py-2 w-full"
            >
              {employee.mobileNumber}
            </p>
          )}
        </div>
        {/* div for email */}
        <div className="flex flex-row ml-1 mt-6 items-center">
          <label className="whitespace-nowrap drop-shadow-md">Email: </label>
          {edit ? (
            <input
              id="emailEdit"
              className=" focus:border-blueCegedim focus:border-2 outline-none text-lg  shadow-lg  ml-28 px-5 py-2 text-center w-full"
              onChange={employeeChangeHandler}
              value={editEmployee.email}
              placeholder={employee.email}
            />
          ) : (
            <p id="email" className="bg-white shadow-lg ml-28 px-5 py-2 w-full">
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
              id="joiningDateEdit"
              onChange={employeeChangeHandler}
              placeholder="Please enter data in the dd/mm/yyyy format"
            />
          ) : (
            <p
              id="joiningDate"
              className="bg-white shadow-lg ml-20 px-5 py-2 w-full"
            >
              {formatDate(employee.joiningDate)}
            </p>
          )}
        </div>
        {/* div for is resigned */}
        <div className="flex flex-row ml-1 mt-6 items-center">
          {edit ? (
            <>
              <label className="whitespace-nowrap drop-shadow-md">
                <input
                  id="resignedCheckboxEdit"
                  className="mr-1"
                  type="checkbox"
                  checked={resignedActive}
                  onChange={resignedCheckBoxHandler}
                />
                Is resigned
              </label>
              <input
                id="resignedEdit"
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
                  id="resignedCheckbox"
                  className="mr-1"
                  type="checkbox"
                  checked={employee.resigned}
                />
                Is resigned
              </label>
              <p
                id="resigned"
                className="bg-white shadow-lg ml-20 px-5 py-2 w-full "
              >
                {employee.resigned
                  ? formatDate(employee.endDate)
                  : "not resigned"}
              </p>
            </>
          )}
        </div>
        {/*div for employee details control button*/}
        <div className="flex flex-row ml-1 mt-6 items-center">
          <button
            id={edit ? "save" : "edit"}
            className="mt-6 rounded bg-blueCegedim hover:opacity-75 text-white py-2 px-5 w-fit"
            onClick={editClickHandler}
          >
            {edit ? "Save" : "Edit"}
          </button>
          {edit ? (
            <button
              id="cancel"
              onClick={editClickHandler}
              className="ml-6 mt-6 rounded bg-blueCegedim hover:opacity-75 text-white py-2 px-5 w-fit"
            >
              Cancel
            </button>
          ) : (
            <></>
          )}
          {edit ? (
            <p className="ml-40 text-yellowDarkCegedim text-lg drop-shadow-md">
              You are now on the edit view. Click on the boxes to change the
              values.
            </p>
          ) : (
            <></>
          )}
          {updateError ? (
            <p className="ml-40 text-red text-lg drop-shadow-md">
              Error saving employee data, please try again
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-3/6">
        <h3 className="text-2xl bg-blueCegedim text-white shadow-lg px-5 py-2 rounded-xl">
          All absences
        </h3>
        <div className="flex flex-row mt-6 text-lg">
          <div className="flex flex-col items-center mr-8">
            <p className="bg-darkGrey px-5 py-2  text-white mb-3 rounded-md">
              Sick
            </p>
            <p className="bg-yellowDarkCegedim text-white rounded-full px-3 py-1 w-fit">
              0
            </p>
          </div>
          <div className="flex flex-col items-center mr-8">
            <p className="bg-darkGrey px-5 py-2  text-white mb-3 rounded-md">
              Emergency
            </p>
            <p className="bg-yellowDarkCegedim text-white rounded-full px-3 py-1 w-fit">
              0
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="bg-darkGrey px-5 py-2  text-white mb-3 rounded-md">
              Maternity
            </p>
            <p className="bg-yellowDarkCegedim text-white rounded-full px-3 py-1 w-fit">
              0
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <p className="text-2xl bg-darkGrey px-5 py-2  text-white mb-3 rounded-md">
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
