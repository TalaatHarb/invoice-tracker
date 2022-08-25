import React, { useEffect, useRef, useState } from "react";
import EmployeeTable from "../../components/employees-hub/EmployeeTable";
import FilterComboBox from "../../components/employees-hub/FilterComboBox";
import Navbar from "../../components/Navbar";
import { employeeFilterType } from "./types";
import axios from "axios";
import { useAppSelector } from "../../hooks/toolkit-types";
import { employeeType } from "../../components/employees-hub/types";
import { CONSTANTS } from "../../utils/constants";

const EmployeesHub = () => {
  const isAuthenticated: any = useAppSelector(
    (state) => state.AuthenticationSlice.isAuthenticated
  );
  const allEmployeeDataUrl = `${CONSTANTS.BACKEND_URL}/api/users`;
  const [employeeData, setEmployeeData] = useState<employeeType[]>([
    {
      id: 1,
      employeeId: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      email: "mohamedzakaria@gmail.com",
      mobileNumber: "0101342345",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      disabled: false,
      team: [
        { id: 1, name: "back-end" },
        { id: 1, name: "back-end" },
      ],
      fullTime: true,
      resigned: false,
    },
  ]);
  const [currentField, setCurrentField] = useState<string>("id");
  const [employeeFilter, setEmployeeFilter] = useState<employeeFilterType>({});

  const filterApplyClearhandler = async (event: any) => {
    let value: any = "";
    switch (currentField) {
      case "id":
        value = employeeFilter.id;
        break;
      case "englishName":
        value = employeeFilter.englishName;
        break;
      case "arabicName":
        value = employeeFilter.arabicName;
        break;
      case "jobTitle":
        value = employeeFilter.jobTitle;
        break;
      case "joinDate":
        value = employeeFilter.joiningDate;
        break;
      case "endDate":
        value = employeeFilter.endDate;
        break;
      case "allowedBalance":
        value = employeeFilter.allowedBalance;
        break;
      case "remainingBalance":
        value = employeeFilter.remainingBalance;
        break;
      case "teams":
        value = employeeFilter.team;
        break;
      case "billable":
        value = employeeFilter.billable;
        break;
      case "fullTime":
        value = employeeFilter.fullTime;
        break;
      case "disabled":
        value = employeeFilter.disabled;
        break;
    }
    const id = event.target.id;
    const filterQueryUrl = `${CONSTANTS.BACKEND_URL}/api/users/filter?type=${currentField}&values=${value}`;
    if (id == "apply") {
      await axios
        .get(filterQueryUrl, {
          headers: { Authorization: `Bearer ${isAuthenticated}` },
        })
        .then((response) => {
          setEmployeeData(response.data);
        });
    } else {
      setEmployeeFilter({ billable: "all", fullTime: "all", disabled: "all" });
      await axios
        .get(allEmployeeDataUrl, {
          headers: { Authorization: `Bearer ${isAuthenticated}` },
        })
        .then((response) => {
          console.log(response.data);
          setEmployeeData(response.data);
        });
    }
  };

  const currentFieldChangeHandler = (event: any) => {
    setCurrentField(event.target.id);
  };

  const employeeFilterHandler = (event: any) => {
    const targetId = event.target.id;
    const targetValue = event.target.value;
    setCurrentField(targetId);
    let newData = {};
    switch (targetId) {
      case "id":
        newData = { id: targetValue };
        break;
      case "employeeId":
        newData = { employeeId: targetValue };
        break;
      case "englishName":
        newData = { englishName: targetValue };
        break;
      case "arabicName":
        newData = { arabicName: targetValue };
        break;
      case "jobTitle":
        newData = { jobTitle: targetValue };
        break;
      case "joinDate":
        newData = { joiningDate: targetValue };
        break;
      case "endDate":
        newData = { endDate: targetValue };
        break;
      case "allowedBalance":
        newData = { allowedBalance: targetValue };
        break;
      case "remainingBalance":
        newData = { remainingBalance: targetValue };
        break;
      case "teams":
        newData = { team: targetValue };
        break;
      case "billable":
        newData = { billable: event.target.checked + "" };
        break;
      case "fullTime":
        newData = { fullTime: event.target.checked + "" };
        break;
      case "disabled":
        newData = { disabled: event.target.checked + "" };
        break;
    }

    setEmployeeFilter({
      ...newData,
    });
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(allEmployeeDataUrl, {
          headers: { Authorization: `Bearer ${isAuthenticated}` },
        })
        .then((response) => {
          setEmployeeData(response.data);
        });
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col min-h-screen  bg-lightGrey bg-opacity-20 items-center">
        <div className="flex flex-row justify-between w-full items-center">
          <h1 className=" drop-shadow-xl ml-60 my-12 text-5xl text-blueCegedim font-bold">
            Cegedim Members
          </h1>
          <div>{/* add drop down here */}</div>
        </div>
        <div className="flex flex-row justify-start w-full  ml-96">
          <div className="mx-12 my-10">
            <h3 className="text-xl text-black font-medium">Filter by</h3>
            <FilterComboBox onOptionClick={currentFieldChangeHandler} />
          </div>
          <input
            id={currentField + ""}
            onChange={employeeFilterHandler}
            type="text"
            className="px-4 py-2 shadow-lg rounded-md max-h-20 text-sm self-center mt-8 "
            placeholder="search value here"
          />
          <div className="flex flex-col justify-end ml-10">
            <label className="mb-2 ">
              <input
                onChange={employeeFilterHandler}
                className="mr-1"
                id="billable"
                type="checkbox"
              />
              Billable
            </label>
            <label className="mb-2">
              <input
                onChange={employeeFilterHandler}
                className="mr-1"
                id="disabled"
                type="checkbox"
              />
              Is disabled
            </label>
            <label className="mb-2">
              <input
                onChange={employeeFilterHandler}
                className="mr-1"
                id="fullTime"
                type="checkbox"
              />
              Fulltime
            </label>
          </div>
          <div className=" flex flex-row justify-end mt-28">
            <button
              id="apply"
              className="text-base rounded-md px-2 max-h-7 bg-yeollowLightCegedim text-black"
              onClick={filterApplyClearhandler}
            >
              Apply
            </button>
            <button
              id="clear"
              className="mx-6 text-base rounded-md px-2 max-h-7  bg-yeollowLightCegedim text-black"
              onClick={filterApplyClearhandler}
            >
              Clear
            </button>
          </div>
        </div>

        <EmployeeTable employees={employeeData} />
      </div>
    </div>
  );
};

export default EmployeesHub;
