import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/toolkit-types";
import {  useNavigate } from 'react-router-dom'
import axios from "axios";
import './emplyeePage.scss'
import { useAppDispatch } from '../../hooks/toolkit-types'
import { getID } from '../../services/redux/slices/AuthenticationSlice'
import { count } from "console";
import Button from "../../components/Button";



const EmployeePage = (props:any) => {
  
  const { isAuthenticated } = useAppSelector((state) => state.AuthenticationSlice)
  const [employee, setEmployee] = useState({username:"",email:"",roles:[{name:""}],phoneNumber:"",joiningDate:"",annuealLeaves:null,requests:[{id:null,type:"",startDate:"",endDate:"",accepted:false}]});
  const dispatch = useAppDispatch()
  const[requests,setReuests]=useState([{name:"",rating:null}])
  const navigate = useNavigate()

  useEffect(() => {  
   handleEmployee()
    }, []);


  const handleEmployee=async()=>{
    
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` }
  };
  
    let res = await axios.get(
      `http://localhost:8080/api/user?ID=1`,
        config
    )
    console.log(res.data)
    setEmployee(res.data)
    console.log()
    const count:any = {};

let a=res.data.requests.map((e:any)=>e.type)
for (const element of a) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
const objArray:any = [];
Object.keys(count).forEach(key => objArray.push({
   name: key,
   rating: count[key]
}));

console.log(objArray)
setReuests(objArray)
}

  return (
    <div className='containerr m-5 '>
    <div className='data flex'>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg flex-1 mr-40 max-w-screen-md "> 
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Employee data</h3>
      
    </div>
    <div className="border-t border-gray-200">
      <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Name</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.username}</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Job title</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.roles[0].name}</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Phone</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.phoneNumber}</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Email</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.email}</dd>
        </div>

        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Joining date</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.joiningDate}</dd>
        </div>
      </dl>
     
    </div>
   
    </div>
      <div className="w-80 text-center  ">
      <h1  className="bg-blueCegedim" >All absence</h1>
      
      <div className="flex justify-between" >
      {requests.map((req)=>(
        <div className=" text-center mt-10" key={req.name}>
      <h1>{req.name}</h1>
    <p className="mt-10 "> {req.rating}</p>
     </div>
     
      ))
    
}
    </div>
    <div>
      <h1 className="mt-10  bg-blueCegedim w-44 ml-20">Anuual leaves to take</h1>
      <p className="mt-10"> {employee.annuealLeaves}</p>
      <Button
          onClick={() => {
            console.log("hiii")
            navigate('/request')
          }}
        className="mt-20" >
         Request time off
        </Button>
    </div>
</div>
     
   
  </div>
<div className='requests'>
  <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Requests</h1>
          
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Request ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Type
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Start Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    End Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                     Approved
                    </th>
                    
                  </tr>
                </thead>
               
                  <tbody className="divide-y divide-gray-200 bg-white">
                  {employee.requests.map((req)=>(
                  <tr key="aa">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {req.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{req.type}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{req.startDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{req.endDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{req.accepted?"Yes":"No"}</td>
                   
                  </tr>))
                  }
              </tbody>
             
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
    
  )
}

export default EmployeePage

