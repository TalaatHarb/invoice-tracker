import React, { useEffect,Fragment, useState } from 'react'
import { MdMargin } from 'react-icons/md'
import EmployeeTable from '../../components/requestTable/EmployeeTable'
import Navbar from '../../components/Navbar/index'
import { FetchFacad } from '../../utils/FetchFacad'
import { useAppSelector } from '../../hooks/toolkit-types'
import axios from 'axios'
import { CONSTANTS } from '../../utils/constants'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Select from 'react-select'

const RequestList = () => {
  const isAuthenticated: any = useAppSelector(
    (state) => state.AuthenticationSlice.isAuthenticated
  )
  const employees = [
    {
      id:1,
      employeeid:"1",
      englishName: 'Amr Essam',
      arabicName: 'عمرو عصام ',
      RequestType: 'Unpaid Leave',
      requestDate: "29/08/2022, 16:48:31",
      allowedBalance:"21",
      remainingBalance: "7",
      billable: true,
      team: ['Team A'],
    },
    {id:2,
      employeeid: "2",
      englishName: 'Mostafa',
      arabicName: 'مصطفي ',
      RequestType: 'Sickness Leave',
      requestDate: "28/08/2022, 15:33:01",
      allowedBalance: "21",
      remainingBalance: "4",
      billable: true,
      team: ['Team C'],
    },
    {
      id: 3,
      employeeid:"3",
      englishName: 'Hamada',
      arabicName: 'حماده ',
      RequestType: 'Maternity Leave',
      requestDate: "26/08/2022, 11:08:32",
      allowedBalance: "21",
      remainingBalance: "21",
      billable: true,
      team: ['Team C'],
    },
    {
      id: 4,
      employeeid:"4",
      englishName: 'Mohamed Gado',
      arabicName: 'محمد جادو ',
      RequestType: 'Paid Leave',
      requestDate: "26/08/2022, 10:18:35",
      allowedBalance: "21",
      remainingBalance: "7",
      billable: true,
      team: ['Team A'],
    },
    {
      id: 5,
      employeeid:"5",
      englishName: 'Ahmed',
      arabicName: 'احمد ',
      RequestType: 'Unpaid Leave',
      requestDate: "25/08/2022, 09:08:01",
      allowedBalance: "21",
      remainingBalance: "2",
      billable: true,
      team: ['Team B'],
    },
    
  ]
  const [requestData, setRequestData] = useState<any>(employees)

  const allEmployeeDataUrl = `${CONSTANTS.BACKEND_URL}/api/user/absence/LeaveRequests`
  const fetchFacad = new FetchFacad()
  const [selectedDropdown, setSelectedDropdown] = useState("")
  const [searchText, setSearchText] = useState('')


  const config = {
    headers: { Authorization: `Bearer ${isAuthenticated}` },
  }

  
  const fetchAbsences = async () => {
    let res = await axios.get(
      allEmployeeDataUrl,
      config
    )
    console.log(res.data)
  }

  const options = [
    { value: 'employeeid', label: 'Request Id' },
    { value: 'englishName', label: 'English Name' },
    { value: 'RequestType', label: 'Leave type' },
    { value: 'arabicName', label: 'Arabic Name' },
    { value: 'allowedBalance', label: 'Allowed Balance' },
    { value: 'requestDate', label: ' Request Date' },

    { value: 'remainingBalance', label: 'Remaining Balance' },
  ]

  useEffect(() => {
    fetchAbsences();
  }, [])

  const filterDta = ()=>{
  return (Boolean(selectedDropdown) && searchText.length > 0) && requestData.filter((item:any )=> {
  console.log(">>>>>>>>>>>>>>>>>>", item[selectedDropdown], searchText)
  return item[selectedDropdown].includes(searchText)
 })
}


  const applyFilter = ()=>{
    if(Boolean(selectedDropdown) && searchText.length > 0){
      const filterdData = filterDta()
      setRequestData(filterdData)

    }else{
      setRequestData(employees)

    }
  }

  const clearFilter=()=>{
    setSelectedDropdown("")
    setSearchText("")
    setRequestData(employees)
  }
const handleSearch=(e:any)=>{
 
  setSearchText(e.target.value)
}
const handleSelectdropdown= (e:any)=>{
  setSelectedDropdown(e.value)
}

  return (
    <>
      <Navbar />
      <div className='flex flex-col min-h-screen bg-lightGrey bg-opacity-20 items-center'>
        <div className='flex flex-row justify-start w-full'>
          <h1 className=' drop-shadow-xl mx-10 my-12 text-5xl text-blueCegedim font-bold'>
            Welcome , HR Admin
          </h1>
        </div>
        <div className='flex-row justify-start w-full'>
            <div><h3 className='ml-20 text-xl text-black font-medium'>Filter by</h3></div>

          <div  id = "DropList"  className='flex mx-12'>
            <Select   className='px-4 py-2 rounded-md max-h-18 text-sm self-center mt-8 ' onChange={handleSelectdropdown} options={options} />    
          <input
            type='text'
            value={searchText}
            onChange={handleSearch}
            className='px-4 py-2 shadow-lg rounded-md max-h-18 text-sm self-center mt-8 '
            placeholder='search value here'
          />
           <label className=' mr-1'>
              <input className='mr-1 ' id='billable' type='checkbox' />
              Billable
            </label>
          </div>
        
          <div id = "Apply" className='flex flex-row justify-center'>
            <button onClick={applyFilter} className='ml-60 text-base rounded-md px-2 max-h-7 bg-yeollowLightCegedim text-black'>
              Apply
            </button>
            <button onClick={clearFilter} className='mx-6 text-base rounded-md px-2 max-h-7  bg-yeollowLightCegedim text-black'>
              Clear
            </button>
          </div>
        </div>

        <EmployeeTable employees={requestData} />
      </div>
    </>
  )
}

export default RequestList
