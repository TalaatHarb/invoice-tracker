import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const fields = [
  { id: "id", name: "Id" },
  { id: "englishName", name: "English Name" },
  { id: "arabicName", name: "Arabic name" },
  { id: "jobTitle", name: "Job title" },
  { id: "joinDate", name: "Joining date" },
  { id: "endDate", name: "End date" },
  { id: "allowedBalance", name: "Allowed Balance" },
  { id: "remainingBalance", name: "Remaining Balance" },
  { id: "teams", name: "Teams" },
];

type filterComboBoxProps = {
  onOptionClick?: React.MouseEventHandler<HTMLLIElement>;
};

const FilterComboBox = ({ onOptionClick }: filterComboBoxProps) => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  type fieldType = {
    id: number;
    name: string;
  };
  const filteredFields =
    query === ""
      ? fields
      : fields.filter((field) =>
          field.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div >
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(field: fieldType) => field.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredFields.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredFields.map((field) => (
                  <Combobox.Option
                    key={field.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blueCegedim text-white" : "text-gray-900"
                      }`
                    }
                    value={field}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          id={field.id}
                          onClick={onOptionClick}
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {field.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default FilterComboBox;
