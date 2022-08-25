import React from "react";
import PopUpExcel from './PopUpExcel';


import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Example() {
    const  [buttonpopup,setButtonpopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="self-end text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
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
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <Menu.Item>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700'
                    >
                      
                      <div className="float-left">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</div>
                     
                     <p className='font-bold hover:text-blueCegedim ' >Export Employees</p>
                    
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700'
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 float-left">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>

                      <p className='font-bold  hover:text-blueCegedim ' onClick={() => setButtonpopup(true)}>Post From Clibord </p>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to='/empadd'
                      className='block px-4 py-2 text-sm text-gray-700'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 float-left">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                    </svg>

                      <p className='font-bold hover:text-blueCegedim '> Add New Employee </p>
                    </Link>
                  </Menu.Item>
                    
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )

}
