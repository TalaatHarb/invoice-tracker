import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/employees-hub/EmployeeTable";
import FilterComboBox from "../../components/employees-hub/FilterComboBox";
import Navbar from "../../components/Navbar";
import { employeeFilterType } from "./types";
import axios from "axios";
import { useAppSelector } from "../../hooks/toolkit-types";

const EmployeesHub = () => {
  const isAuthenticated: any = useAppSelector(
    (state) => state.AuthenticationSlice.isAuthenticated
  );
  const allEmployeeDataUrl = "http://localhost:8080/employee/all";
  const [employeeData, setEmployeeData] = useState<any>({});
  const [currentField, setCurrentField] = useState<string>("id");
  const [employeeFilter, setEmployeeFilter] = useState<employeeFilterType>({
    billable: false,
    fulltime: false,
    isDisabled: false,
  });

  const filterApplyClearhandler = (event: any) => {

    const getData = async (url:string)=>{
      await axios.get(url, {
        headers: { "Authorization": `Bearer ${isAuthenticated}` },
      }).then(response=>{
        console.log(response.data);
        return response.data;
      })
    }
    let value:any = "";
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
      case "joiningDate":
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
      case "fulltime":
        value = employeeFilter.fulltime;
        break;
      case "disabled":
        value = employeeFilter.isDisabled;
        break;
    }
    console.log(value);
    const id = event.target.id;
    const filterQueryUrl = `http://localhost:8080/employees/filter?type=${currentField}&values=${value}`;
    if (id == "apply") {
      const filteredData = getData(filterQueryUrl);
      console.log(filteredData);
      setEmployeeData(filteredData);
    } else {
      setEmployeeFilter({
        billable: false,
        fulltime: false,
        isDisabled: false,
      });
      const data = getData(allEmployeeDataUrl)
      console.log(data);
      setEmployeeData(data);
    }
  };

  const currentFieldChangeHandler = (event: any) => {
    setCurrentField(event.target.id);
  };

  const employeeFilterHandler = (event: any) => {
    const targetId = event.target.id;
    const targetValue = event.target.value;
    let newFilter = { ...employeeFilter };
    let newData = {};
    console.log(targetValue);
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
      case "joiningDate":
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
    setEmployeeFilter(newFilter);
  };

  useEffect(() => {

    const getData = async ()=>{
      await axios
      .get(allEmployeeDataUrl, {
        headers: { "Authorization": `Bearer ${isAuthenticated}` },
      })
      .then((response) => {
        setEmployeeData(response.data);
      });
    }
    getData()    
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

        <EmployeeTable employees={employeeData} />
      </div>
    </div>
  );
};

export default EmployeesHub;
