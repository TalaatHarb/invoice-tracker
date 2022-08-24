import React from "react";
import { useParams } from "react-router";
import AbsenceHistoryAccordionList from "../../components/absence-history-accordion";
import EmployeeDetails from "../../components/employeePage-HR/EmployeeDetails";
import Navbar from "../../components/Navbar";

const EmployeeAdminHrView = () => {
  const { employeeId } = useParams();
  return (
    <>
      <Navbar />
      <EmployeeDetails id={Number(employeeId)} />
      <div className="px-56 leading-tight text-2xl mt-0 mb-2 bg-lightGrey bg-opacity-20">
        <AbsenceHistoryAccordionList />
        <br />
        <div className="flex flex-row-reverse">
          <button className="inline-flex items-center px-3 py-1.5 bg-lightGrey hover:bg-darkGrey text-sm font-medium rounded-md mx-2">
            Cancel
          </button>
          <button className="inline-flex items-center px-3 py-1.5 bg-lightGrey hover:bg-darkGrey text-sm font-medium rounded-md mx-2">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeAdminHrView;
