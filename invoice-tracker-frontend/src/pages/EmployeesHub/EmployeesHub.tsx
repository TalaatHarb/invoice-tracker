import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/employees-hub/EmployeeTable";
import FilterComboBox from "../../components/employees-hub/FilterComboBox";
import Navbar from "../../components/Navbar";
import { FetchFacad } from "../../utils/FetchFacad";
import { employeeFilterType } from "./types";

const EmployeesHub = () => {
  const allEmployeeDataUrl = "http://localhost:8080/employee/all";
  const fetchFacad = new FetchFacad();
  const [employeeData, setEmployeeData] = useState({});
  const [currentField, setCurrentField] = useState<string>("0");
  const [employeeFilter, setEmployeeFilter] = useState<employeeFilterType>({
    billable: false,
    fulltime: false,
    isDisabled: false,
  });

  const filterApplyClearhandler = (event: any) => {
    const id = event.target.id;
    const filterQueryUrl = "http://localhost:8080/employee/filter";
    if (id == "apply") {
      const filteredData = fetchFacad.getData(filterQueryUrl);
      setEmployeeData(filteredData);
    } else {
      setEmployeeFilter({
        billable: false,
        fulltime: false,
        isDisabled: false,
      });
      const data = fetchFacad.getData(allEmployeeDataUrl);
      setEmployeeData(data);
    }
  };

  const currentFieldChangeHandler = (event: any) => {
    console.log("setting current field to:" + event.target.id);
    setCurrentField(event.target.id);
  };

  const employeeFilterHandler = (event: any) => {
    const targetId = event.target.id;
    const targetValue = event.target.value;
    let newFilter = { ...employeeFilter };
    let newData = {};
    console.log(targetValue);
    switch (targetId) {
      case "1":
        newData = { id: targetValue };
        break;
      case "2":
        newData = { employeeId: targetValue };
        break;
      case "3":
        newData = { englishName: targetValue };
        break;
      case "4":
        newData = { arabicName: targetValue };
        break;
      case "5":
        newData = { jobTitle: targetValue };
        break;
      case "6":
        newData = { joiningDate: targetValue };
        break;
      case "7":
        newData = { endDate: targetValue };
        break;
      case "8":
        newData = { allowedBalance: targetValue };
        break;
      case "9":
        newData = { remainingBalance: targetValue };
        break;
      case "10":
        newData = { team: targetValue };
        break;
      case "billable":
        newData = { billable: event.target.checked };
        break;
      case "fulltime":
        newData = { fulltime: event.target.checked };
        break;
      case "disabled":
        newData = { isDisabled: event.target.checked };
        break;
    }
    newFilter = {
      billable: employeeFilter.billable,
      isDisabled: employeeFilter.isDisabled,
      fulltime: employeeFilter.fulltime,
      ...newData,
    };
    console.log(newFilter);
    setEmployeeFilter(newFilter);
  };

  useEffect(() => {
    const response = fetchFacad.getData(allEmployeeDataUrl);
    setEmployeeData(response);
  }, []);

  const employees = [
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end", "front-end"],
      fulltime: true,
    },
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end", "front-end"],
      fulltime: true,
    },
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end", "front-end"],
      fulltime: true,
    },
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end", "front-end"],
      fulltime: true,
    },
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end", "front-end"],
      fulltime: true,
    },
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end", "front-end"],
      fulltime: true,
    },
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end","front-end"],
      fulltime: true,
    },
    {
      id: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      englishAddress: "caire",
      arabicAddress: "القاهرة",
      jobTitle: "developer",
      joiningDate: new Date(),
      endDate: new Date(),
      allowedBalance: 21,
      remainingBalance: 15,
      billable: true,
      isDisabled: false,
      team: ["back-end", "front-end"],
      fulltime: true,
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="flex flex-col min-h-screen  bg-lightGrey bg-opacity-20 items-center">
        <div className="flex flex-row justify-start w-full">
          <h1 className=" drop-shadow-xl mx-8 my-12 text-5xl text-blueCegedim font-bold">
            Cegedim Members
          </h1>
        </div>
        <div className="flex flex-row justify-start w-full">
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
                id="fulltime"
                type="checkbox"
              />
              Fulltime
            </label>
          </div>
          <div className="flex flex-row justify-end mt-28">
            <button
              id="apply"
              className="ml-60 text-base rounded-md px-2 max-h-7 bg-yeollowLightCegedim text-black"
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

        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
};

export default EmployeesHub;
