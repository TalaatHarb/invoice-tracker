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
      englishName: 'Mohamed',
      arabicName: 'محمد ',
      RequestType: 'Unpaid Leave',
      requestDate: "29/08/2022, 16:48:31",
      allowedBalance:"21",
      remainingBalance: "1",
      billable: true,
      team: ['A'],
    },
    {id:2,
      employeeid: "2",
      englishName: 'Khaled',
      arabicName: 'خالد ',
      RequestType: 'Sickness Leave',
      requestDate: "28/08/2022, 15:33:01",
      allowedBalance: "21",
      remainingBalance: "5",
      billable: true,
      team: ['A'],
    },
    {
      id: 3,
      employeeid:"3",
      englishName: 'Mannar',
      arabicName: 'منار ',
      RequestType: 'Maternity Leave',
      requestDate: "26/08/2022, 11:08:32",
      allowedBalance: "21",
      remainingBalance: "14",
      billable: true,
      team: ['B'],
    },
    {
      id: 4,
      employeeid:"4",
      englishName: 'Sara gamal',
      arabicName: 'ساره جمال  ',
      RequestType: 'Paid Leave',
      requestDate: "26/08/2022, 10:18:35",
      allowedBalance: "21",
      remainingBalance: "2",
      billable: true,
      team: ['C'],
    },
    {
      id: 5,
      employeeid:"5",
      englishName: 'Sherif Saaed',
      arabicName: 'شريف سعيد ',
      RequestType: 'Unpaid Leave',
      requestDate: "25/08/2022, 09:08:01",
      allowedBalance: "21",
      remainingBalance: "6",
      billable: true,
      team: ['F'],
    },
    {
      id: 6,
      employeeid:"6",
      englishName: 'Ahmed Elrashidy ',
      arabicName: 'احمد رشيدي  ',
      RequestType: 'Sickness Leave',
      requestDate: "21/08/2022, 10:38:39",
      allowedBalance: "22",
      remainingBalance: "7",
      billable: true,
      team: ['A'],
    },
    {
      id: 7,
      employeeid:"7",
      englishName: 'Alaa khaled ',
      arabicName: 'علاء خالد  ',
      RequestType: 'Emergency Leave',
      requestDate: "30/08/2022, 16:08:00",
      allowedBalance: "22",
      remainingBalance: "9",
      billable: true,
      team: ['B'],
    },
    {
      id: 8,
      employeeid:"8",
      englishName: 'Mohamed samier ',
      arabicName: 'محمد سمير  ',
      RequestType: 'annual',
      requestDate: "22/08/2022, 08:00:07",
      allowedBalance: "22",
      remainingBalance: "8",
      billable: true,
      team: ['V'],
    },
    {
      id:9,
      employeeid:"9",
      englishName: 'Hesham adel ',
      arabicName: 'هشام عادل  ',
      RequestType: 'Unpaid Leave',
      requestDate: "30/08/2022, 15:15:34",
      allowedBalance: "22",
      remainingBalance: "3",
      billable: true,
      team: ['F'],
    },
    {
      id: 10,
      employeeid:"10",
      englishName: 'Ahmed Mohamed ',
      arabicName: 'احمد محمد  ',
      RequestType: 'annual',
      requestDate: "29/08/2022, 14:13:31",
      allowedBalance: "22",
      remainingBalance: "20",
      billable: true,
      team: ['B'],
    },
    {
      id: 11,
      employeeid:"11",
      englishName: 'Menna Ahmed ',
      arabicName: 'منه احمد  ',
      RequestType: 'Paid Leave',
      requestDate: "21/08/2022, 16:48:02",
      allowedBalance: "22",
      remainingBalance: "21",
      billable: true,
      team: ['N'],
    },
    {
      id: 12,
      employeeid:"12",
      englishName: 'Mohamed Ibrahim ',
      arabicName: 'محمد ابراههيم  ',
      RequestType: 'Lieu Leave',
      requestDate: "19/08/2022, 11:08:49",
      allowedBalance: "22",
      remainingBalance: "22",
      billable: true,
      team: ['E'],
    },
    {
      id: 13,
      employeeid:"13",
      englishName: 'Malak saad ',
      arabicName: 'ملك سعد ',
      RequestType: 'annual',
      requestDate: "30/08/2022, 16:44:43",
      allowedBalance: "22",
      remainingBalance: "21",
      billable: true,
      team: ['B'],
    },
    
  ]
  const [requestData, setRequestData] = useState<any>(employees)

  const allEmployeeDataUrl = `${CONSTANTS.BACKEND_URL}/user/absence/LeaveRequests`
  const fetchFacad = new FetchFacad()
  const [selectedDropdown, setSelectedDropdown] = useState("")
  const [searchText, setSearchText] = useState('')

  const options = [
    { value: 'employeeid', label: 'Employee Id' },
    { value: 'englishName', label: 'English Name' },
    { value: 'RequestType', label: 'Leave type' },
    { value: 'arabicName', label: 'Arabic Name' },
    { value: 'allowedBalance', label: 'Allowed Balance' },
    { value: 'requestDate', label: ' Request Date' },

    { value: 'remainingBalance', label: 'Remaining Balance' },
  ]

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(allEmployeeDataUrl, {
          headers: { Authorization: `Bearer ${isAuthenticated}` },
        })
        .then((response) => {
          setRequestData(response.data)
        })
    }
    getData()
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
