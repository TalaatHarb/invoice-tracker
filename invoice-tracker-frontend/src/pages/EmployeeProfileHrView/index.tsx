import React from "react";
import { useParams } from "react-router";
import AbsenceHistoryAccordionList from "../../components/absence-history-accordion";
import EmployeeDetails from "../../components/employeePage-HR/EmployeeDetails";
import Navbar from "../../components/Navbar";

const EmployeeAdminHrView = () => {
  const { employeeId } = useParams();
  return (
    <div className="min-h-screen bg-lightGrey bg-opacity-20">
      <Navbar />
      <EmployeeDetails id={Number(employeeId)} />
      <div className="px-56 leading-tight text-2xl mt-0 mb-2">
        <AbsenceHistoryAccordionList id={Number(employeeId)} />
      </div>
    </div>
  );
};

export default EmployeeAdminHrView;
