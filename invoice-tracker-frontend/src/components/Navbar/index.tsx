import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import BellButton from "../Button/BellNotification";
import Logo from "../company-logo";

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
        <Logo />
        {/* Container to start from the left {Cegedim Members - Bell Icon - User Icon) */}
        <div className="flex items-center md:order-2">
          <div className="flex item-center space-x-2">
            {/* Cegedim Members */}
            <Link
              to="www.google.com"
              className="block py-2 pr-4 pl-3 active:text-blueCegedim text-darkGrey rounded hover:bg-lightGrey md:hover:bg-transparent md:p-0"
            >
              Cegedim Members
            </Link>

            {/* Bill Icon */}
            <BellButton count={1} />

            {/* Container for the User Icon and the dropdown menu */}
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="flex text-sm rounded-full focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                </Menu.Button>
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Your Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Settings
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
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
