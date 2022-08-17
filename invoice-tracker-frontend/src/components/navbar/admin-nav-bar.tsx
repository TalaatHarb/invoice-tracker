import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Z_FIXED } from "zlib";
import BellButton from "../Buttons/BellNotification";
import Logo from "../logo/Logo";

const styles = {
    inset: '0px auto auto 0px',
    margin: 0,
    transform: "translate(644px, 82px)",
}

/*
  TODOs:
  - Handling the onClickOutside for the notification icon
  - Make a smaller components later (dropdown list - list item)
*/

/*
  BLOCKED:
  - Waiting to recieve the user image link as a global state
*/


const Navbar = () => {
  
  return (
    <nav className="bg-white border-x-4 border-b-4 border-navbar-border px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      {/* Container of all the items in the navbar */}
      <div className="container flex flex-wrap justify-between md:w-auto mx-auto">
        {/* The logo and company title */}
        <Logo/>
        
        {/* Container to start from the left {Cegedim Members - Bell Icon - User Icon) */}
        <div className="flex items-center md:order-2">
            <div className = "flex item-center space-x-2" >
              {/* Cegedim Members */}
              <Link to="/page1" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cegedim Members</Link>
             
              {/* Bill Icon */}
              <BellButton count = {1}/> 

              {/* Container for the User Icon and the dropdown menu */}
              <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="dropdown-toggle flex items-center hidden-arrow border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-expanded="false"> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rounded-full" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </Menu.Button>
                  </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                          <Link to="/page1" className='block px-4 py-2 text-sm text-gray-700'>
                            Your Profile
                          </Link>
                      </Menu.Item>
                      <Menu.Item>
                          <Link to="/page1" className='block px-4 py-2 text-sm text-gray-700'>
                            Settings
                          </Link>
                      </Menu.Item>
                      <Menu.Item>
                          <Link to="/page2" className='block px-4 py-2 text-sm text-gray-700'>
                            Sign out
                          </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;