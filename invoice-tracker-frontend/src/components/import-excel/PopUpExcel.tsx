import axios from "axios";
import React from "react";
import { useState } from "react";

import * as XLSX from "xlsx";
import { useAppSelector } from "../../hooks/toolkit-types";
import "./PopUpExcelcss.css";

function PopUpExcel(props: any) {
  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  // submit
  const [excelData, setExcelData] = useState(null);
  // it will contain array of objects

  // handle File
  const fileType = ["application/vnd.ms-excel"];
  const fileType2 = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const fileType3 = [".csv"];
  const handleFile = (e: any) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (
        (selectedFile && fileType.includes(selectedFile.type)) ||
        fileType2.includes(selectedFile.type) ||
        fileType3.includes(selectedFile.type)
      ) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e: any) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types" as any);
        setExcelFile(null);
      }
    } else {
    }
  };

  // submit function
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      console.log(data);
      fetch_employees(data);
    } else {
      setExcelData(null);
    }
  };

  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  );

  const config = {
    headers: { Authorization: `Bearer ${isAuthenticated}` },
  };

  const fetch_employees = async (prop: any) => {
    console.log({ prop });
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    };

    let res = await axios.post(
      "http://localhost:8080/api/employee/uploadexcel",
      prop,
      config
    );
    console.log(res.data);
    setExcelFileError(res.data.message);
  };

  return props.popup ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="PopUpcontainer">
          {/* upload file section */}
          <div className="form">
            <form
              className="form-group"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <input
                type="file"
                className="form-control"
                onChange={handleFile}
                required
              ></input>
              <br></br>
              <br></br>
              {excelFileError && (
                <div className="text-danger text-blueCegedim" style={{}}>
                  {excelFileError}
                </div>
              )}
              <br></br>

              <button
                type="submit"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-blueCegedim rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <button
                onClick={() => props.setpopup(false)}
                type="button"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-blueCegedim rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5"
              >
                Close
              </button>
            </form>
          </div>
          <br></br>
          <hr></hr>

          {props.children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default PopUpExcel;
