import React from "react";
import { Z_FIXED } from "zlib";
import logo from '../../assets/Cegedim_Logo.jpg'

const styles = {
    inset: '0px auto auto 0px',
    margin: 0,
    transform: "translate(644px, 82px)",
}

/*
  TODOs:
  - Changing the SVG icons to be filled when clicked, how do I revert them when they are not active?
  - Adding a drop down item, is it always static and hidden?
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
        <a href="#" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-logo-text-color">Cegedim</span>
        </a>
      
        {/* Container to start from the left {Cegedim Members - Bell Icon - User Icon) */}
        <div className="flex items-center md:order-2">
            <div className = "flex item-center space-x-2" >
              {/* Cegedim Members */}
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-11111111111111gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cegedim Members</a>
              {/* Bill Icon */}
              <button className="relative border-2 focus:ring-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>

                <span className="absolute inset-0 object-right-top -mr-6">
                  <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                      6
                  </div>
                </span>
              </button>      
              
              {/* Container for the User Icon and the dropdown menu */}
              <div className="flex items-center relative">
                <div className="dropdown relative">
                  {/* User Icon */}
                  <a className="dropdown-toggle flex items-center hidden-arrow border-2 focus:ring-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" href="#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rounded-full" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </a>

                  {/* The hidden dropdown menu */}
                  <ul className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton2">
                    <li>
                      <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Action</a>
                    </li>
                    <li>
                      <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;