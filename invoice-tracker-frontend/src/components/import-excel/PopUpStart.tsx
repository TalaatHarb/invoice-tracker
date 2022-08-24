import React, { Fragment } from 'react';
import { useState } from "react";
import PopUpExcel from './PopUpExcel';
import  './popup-startcss.scss'

import {BsFillArrowUpSquareFill} from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Menu, Transition } from '@headlessui/react';
import Employee_Add from '../add-employee/Employee_Add';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



function PopUpStart() {
  const  [buttonpopup,setButtonpopup] = useState(false);
  const navigate = useNavigate();

  function OpenAddEmployee()
  {

  }
  /*  */
  
  return (
   
    // headliss ui

    <div>
     
       {/* <div className="PopUpStart">
        <main className='main'>
          
       
       <BsFillArrowUpSquareFill  className='PopUppic1'/>
       <div> <p className='PopUphover' >Export Employees</p></div>
       <BsFillArrowDownSquareFill className='PopUppic1' />
        <p className='PopUphover' onClick={() => setButtonpopup(true)}>Post From Clibord </p>
        <BsFillPlusSquareFill className='PopUppic1' />
        <p onClick={() => OpenAddEmployee()} className='PopUphover' >Add New Employee </p>
         <pre>                        </pre>
         <PopUpExcel  popup={buttonpopup} setpopup={setButtonpopup}></PopUpExcel>
   

        </main> */}

<Menu as='div' className='ml-3 relative'>
<PopUpExcel  popup={buttonpopup} setpopup={setButtonpopup}></PopUpExcel>

              <div>
                <Menu.Button className='flex text-sm rounded-full focus:outline-none'>
                  <button 
                    className='dropdown-toggle flex items-center hidden-arrow rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out'
                    id='dropdownMenuButton2'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>


              </button>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items >
                  <Menu.Item>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700'
                    >
                      <BsFillArrowUpSquareFill  className='PopUppic1'/>
                     <p className='PopUphover' >Export Employees</p>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700'
                    >
                       <BsFillArrowDownSquareFill className='PopUppic1' />
                      <p className='PopUphover' onClick={() => setButtonpopup(true)}>Post From Clibord </p>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to='/add'
                      className='block px-4 py-2 text-sm text-gray-700'
                    >
                      <BsFillPlusSquareFill className='PopUppic1' />
                      Add New Employee 
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          

        </div>    

       
  );
}

export default PopUpStart;