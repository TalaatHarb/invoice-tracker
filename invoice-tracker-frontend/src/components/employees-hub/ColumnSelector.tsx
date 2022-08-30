import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { employeeType } from "./types";
import { Table } from "@tanstack/react-table";

type selectorProps = {
  table: Table<employeeType>;
};

const ColumnSelector = ({ table }: selectorProps) => {
  return (
    <div className="self-end max-w-sm text-black">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <CogIcon className="w-10 text-black" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className=" shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll absolute left-1/2 z-10 mt-3 w-60 h-80 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className=" bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 text-left text-base">
                  <div className="px-1">
                    <label>
                      <input
                        className="mr-2"
                        {...{
                          type: "checkbox",
                          checked: table.getIsAllColumnsVisible(),
                          onChange:
                            table.getToggleAllColumnsVisibilityHandler(),
                        }}
                      />
                      Toggle All
                    </label>
                  </div>
                  {table.getAllLeafColumns().map((column) => {
                    return (
                      <div key={column.id} className="px-1">
                        <label>
                          <input
                            id={column.id}
                            className="mr-2"
                            {...{
                              type: "checkbox",
                              checked: column.getIsVisible(),
                              onChange: column.getToggleVisibilityHandler(),
                            }}
                          />
                          {column.id}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default ColumnSelector;
