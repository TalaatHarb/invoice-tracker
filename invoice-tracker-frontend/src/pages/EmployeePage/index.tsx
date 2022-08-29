import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../hooks/toolkit-types'
import UserDisplay from '../../components/UserDisplay'
import RequestCard from '../../components/RequestCard'
import Navbar from '../../components/Navbar'
import { CONSTANTS } from '../../utils/constants'

const EmployeePage = (props: any) => {
  const { isAuthenticated, ID } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  const [employee, setEmployee] = useState({
    username: '',
    email: '',
    roles: [{ name: '' }],
    mobileNumber: '',
    joiningDate: '',
    allowedBalance: 21,
    remainingBalance: 21,
    requests: [{ id: null, type: '', startDate: '', endDate: '', status: '' }],
    requestsTypesNumber: [{ name: '', numberOfDays: null }],
  })
  const dispatch = useAppDispatch()
  const [requests, setRequests] = useState([{ name: '', numberOfDays: 0 }])
  const navigate = useNavigate()

  useEffect(() => {
    handleEmployee()
  }, [])

  const handleEmployee = async () => {
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    }

    let res = await axios.get(
      `${CONSTANTS.BACKEND_URL}/api/user?ID=${ID}`,
      config
    )

    setEmployee(res?.data)
  }

  return (
    <>
      <Navbar />
      <div className='containerr p-11 b bg-lightGrey'>
        <div className='data flex '>
          <UserDisplay
            name={employee?.username}
            roles={employee?.roles}
            phoneNumber={employee?.mobileNumber}
            email={employee?.email}
            joiningDate={employee?.joiningDate?.substring(0, 10)}
            id='user-display'
          />
          <RequestCard
            requests={employee?.requestsTypesNumber}
            allowedBalance={employee?.allowedBalance}
            remainingBalance={employee?.remainingBalance}
            id='employee-request-card'
          />
        </div>
        <div className='requests  bg-white mt-7 w-full border-12  sm:rounded-lg shadow overflow-hidden  ' id='absence-history '>
          <div className='text-center'>
          
            <h1 className='text-3xl font-semibold text-gray-900 h-16 p-4 text-white bg-blueCegedim'>
              Abscence History
            </h1>
          </div>

          {employee.requests.length===0?<h1 className='font-semibold m-5 text-lg'>No abscence history</h1>:
           <div className='px-4 sm:px-6 lg:px-8 pb-5'>
           <div className='sm:flex sm:items-center'>
             <div className='sm:flex-auto'></div>
             <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'></div>
           </div>
           <div className='mt-8 flex flex-col'>
             <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
               <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                 <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                   <table className='min-w-full divide-y divide-gray-300'>
                     <thead className='bg-gray-50'>
                       <tr>
                         <th
                           scope='col'
                           className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                         >
                           Request ID
                         </th>
                         <th
                           scope='col'
                           className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                         >
                           Type
                         </th>
                         <th
                           scope='col'
                           className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                         >
                           Start Date
                         </th>
                         <th
                           scope='col'
                           className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                         >
                           End Date
                         </th>
                         <th
                           scope='col'
                           className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                         >
                           Status
                         </th>
                       </tr>
                     </thead>

                     <tbody className='divide-y divide-gray-200 bg-white'>
                       {employee?.requests.map((req) => (
                         <tr key={req.id}>
                           <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                             {req?.id}
                           </td>
                           <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                             {req?.type}
                           </td>
                           <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                             {req?.startDate.substring(0, 10)}
                           </td>
                           <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                             {req?.endDate.substring(0, 10)}
                           </td>
                           <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                             {req?.status}
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
            
          }
         
        </div>
      </div>
    </>
  )
}

export default EmployeePage
