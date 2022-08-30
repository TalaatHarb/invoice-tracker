import React,{useEffect,useState} from "react";
import { MdMargin } from "react-icons/md";
import EmployeeTable from "../../components/requestTable/EmployeeTable";
import FilterComboBox from "../../components/employees-hub/FilterComboBox";
import Navbar from  "../../components/Navbar";
import { FetchFacad } from "../../utils/FetchFacad";
import { useAppSelector } from "../../hooks/toolkit-types";
import axios from "axios";


   

const RequestList=()=>{
    const isAuthenticated: any = useAppSelector(
        (state) => state.AuthenticationSlice.isAuthenticated
      );
    const employees = [
        {id:1,
        englishName: "Mohamed",
        arabicName: "محمد ",
        RequestType : "type",
        requestDate:new Date,
        allowedBalance: 22,
        remainingBalance: 15,
        billable: true,
        team: ["A"],
        },
        {id:2,
            englishName: "Khaled",
            arabicName: "خالد ",
            RequestType : "sick",
            requestDate:new Date,
            allowedBalance: 22,
            remainingBalance: 15,
            billable: true,
            team: ["A"],
            },
            {id:3,
                englishName: "Mannar",
                arabicName: "منار ",
                RequestType : "annual",
                requestDate:new Date,
                allowedBalance: 22,
                remainingBalance: 15,
                billable: true,
                team: ["B"],
                }
    ]
    const [requestData, setRequestData] = useState<any>([]);

    const allEmployeeDataUrl ="http:localhost:8080/user/absence/LeaveRequests";
    const fetchFacad = new FetchFacad();
   
        useEffect(() => {
            const getData = async () => {
              await axios
                .get(allEmployeeDataUrl, {
                  headers: { Authorization: `Bearer ${isAuthenticated}` },
                })
                .then((response) => {
                    setRequestData(response.data);
                });
            };
            getData();
          }, []);
        
    return   <>
     <Navbar/>
    <div className="flex flex-col min-h-screen bg-lightGrey bg-opacity-20 items-center">
      
        <div className="flex flex-row justify-start w-full">
            <h1 className=" drop-shadow-xl mx-10 my-12 text-5xl text-blueCegedim font-bold">Welcome , HR Admin</h1>
        </div>
        <div className="flex flex-row justify-start w-full">
            <div className="mx-12 my-9">
                <h3 className="text-xl text-black font-medium">Filter by</h3>
               
            </div>
                <input type="text" className="px-4 py-2 shadow-lg rounded-md max-h-18 text-sm self-center mt-8 " placeholder="search value here"/>
            <div  className="mx-11 my-12">
                <label className=" mr-1 h-60"><input className="mr-1  h-50" id="billable" type="checkbox"/>Billable</label>
        
             
            </div>
            <div className="flex flex-row justify-end mt-28">
              <button className="ml-60 text-base rounded-md px-2 max-h-7 bg-yeollowLightCegedim text-black">Apply</button>
                   <button className="mx-6 text-base rounded-md px-2 max-h-7  bg-yeollowLightCegedim text-black">Clear</button>
            </div>
        </div>

        <EmployeeTable employees={employees} />
      </div>
    </>
}

export default RequestList