import React, { useEffect, useRef, useState } from "react";
import InvoiceTable from "../../components/invoice-page/InvoiceTable";
import FilterComboBox from "../../components/invoice-page/FilterComboBox";
import Navbar from "../../components/Navbar";
import { useAppSelector } from "../../hooks/toolkit-types";
import { CONSTANTS } from "../../utils/constants";
import PopUpStart from "../../components/import-excel/PopUpStart";

const EmployeesHub = () => {
  const isAuthenticated: any = useAppSelector(
    (state) => state.AuthenticationSlice.isAuthenticated
  );
  const allEmployeeDataUrl = `${CONSTANTS.BACKEND_URL}/api/users`;
  const [employeeData, setEmployeeData] = useState<any>([
    {
      employeeId: 1,
      nationalId: "23434454534",
      englishName: "Mohamed",
      arabicName: "محمد ",
      profileNumber: "1",
      joiningDate: new Date(),
      numberWD: 21,
      amountWD: 200,
      numberPH: 5,
      amountPH: 300,
      company: "Cegedim",
      country: "france",
      team: [
        { id: 1, name: "back-end" },
        { id: 2, name: "back-end" },
      ],
    },
  ]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col min-h-screen  bg-lightGrey bg-opacity-20 items-center">
        <div className="flex flex-row justify-between w-full items-center">
          <h1 className=" drop-shadow-xl ml-36 my-12 text-5xl text-blueCegedim font-bold">
            Hello Manager
          </h1>
          <button className="text-white bg-blueCegedim rounded-full text-sm shadow-lg mr-52 px-5 py-2">
            Export Invoices
          </button>
        </div>
        <div className="flex flex-row justify-start w-full  ml-96">
          <div className="mx-12 my-10">
            <h3 className="text-xl text-black font-medium">Filter by</h3>
            <FilterComboBox />
          </div>
          <input
            type="text"
            className="px-4 py-2 shadow-lg rounded-md max-h-20 text-sm self-center mt-8 "
            placeholder="search value here"
          />
          <div className=" flex flex-row justify-end mt-28">
            <button
              id="apply"
              className="text-base rounded-md px-2 max-h-7 bg-yeollowLightCegedim text-black"
            >
              Apply
            </button>
            <button
              id="clear"
              className="mx-6 text-base rounded-md px-2 max-h-7  bg-yeollowLightCegedim text-black"
            >
              Clear
            </button>
          </div>
        </div>

        <InvoiceTable employees={employeeData} />
      </div>
    </div>
  );
};

export default EmployeesHub;
