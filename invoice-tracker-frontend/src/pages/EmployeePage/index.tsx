
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit-types";
import { getID } from "../../services/redux/slices/AuthenticationSlice";
import Button from "../../components/Button";
import UserDisplay from "../../components/UserDisplay";
import RequesCard from "../../components/RequestCard";
import { logoutUser } from '../../services/redux/slices/AuthenticationSlice'
import { CONSTANTS } from "../../utils/constants";

const EmployeePage = (props: any) => {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  );
  const [employee, setEmployee] = useState({
    username: "",
    email: "",
    roles: [{ name: "" }],
    mobileNumber: "",
    joiningDate: "",
    allowedBalance: 21,
    requests: [
      { id: null, type: "", startDate: "", endDate: "", status: "" },
    ],
  });
  const dispatch = useAppDispatch();
  const [requests, setRequests] = useState([{ name: "", rating: null }]);
  const navigate = useNavigate();
  const { ID } = useAppSelector((state) => state.AuthenticationSlice);

  useEffect(() => {
    handleEmployee();
  }, []);

  const handleEmployee = async () => {
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    };

    let res = await axios.get(`${CONSTANTS.BACKEND_URL}/api/user?ID=1`, config);

    setEmployee(res.data);
    const count: any = {};

    let a = res.data.requests.map((e: any) => e.type);
    for (const element of a) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    const objArray: any = [];
    Object.keys(count).forEach((key) =>
      objArray.push({
        name: key,
        rating: count[key],
      })
    );

    
    setRequests(objArray);
    dispatch(getID(res.data.id));
    console.log(res.data.id)
  };

  return (
    <div className="containerr p-11 b bg-lightGrey">
      <Button className="w-48 ml-auto mb-7"


          onClick={() => {
            dispatch(logoutUser())
          }}
        >
          Log Out
        </Button>

      <div className="data flex ">
        
        <UserDisplay  name={employee.username} roles={employee.roles} phoneNumber={employee.mobileNumber} email={employee.email} joiningDate={employee.joiningDate.substring(0,10)}/>
       <RequesCard requests={requests} annuealLeaves={employee.allowedBalance}/>
       
      </div>
      <div className="requests  bg-white mt-7 w-full border-12  rounded ">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 h-16 p-4 text-white bg-blueCegedim">
            Abscence History
          </h1>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-5">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto"></div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Request ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Start Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          End Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Approved
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                      {employee.requests.map((req) => (
                        <tr key="aa">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {req.id}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {req.type}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {req.startDate.substring(0,10)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {req.endDate.substring(0,10)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {req.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;

