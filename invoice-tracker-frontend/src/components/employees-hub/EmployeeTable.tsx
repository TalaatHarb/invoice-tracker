import React from "react";
import { employeeType } from "./types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import ColumnSelect from "./ColumnSelector";
import { useNavigate } from "react-router";

type employeeTableProps = {
  employees: employeeType[];
};

const EmployeeTab = ({ employees }: employeeTableProps) => {
  const navigate = useNavigate();
  const data = employees;
  const columnHelper = createColumnHelper<employeeType>();

  const columns = [
    columnHelper.group({
      header: ({ table }) => {
        return (
          <input
            className="w-4"
            type="checkbox"
            {...{
              checked: table.getIsAllRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        );
      },
      id: "Selection",
      cell: ({ row }) => {
        return (
          <input
            className="w-4"
            type="checkbox"
            {...{
              checked: row.getIsSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        );
      },
    }),
    columnHelper.accessor((row) => row.id, {
      id: "Id",
      header: "Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.nationalId, {
      id: "National Id",
      header: "National Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.englishName, {
      id: "English name",
      header: "English name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.arabicName, {
      id: "Arabic name",
      header: "Arabic name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.englishAddress, {
      id: "English address",
      header: "English Address",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.arabicAddress, {
      id: "Arabic address",
      header: "Arabic address",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.jobTitle, {
      id: "Job title",
      header: "Job title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.joiningDate, {
      id: "Joining date",
      header: "Joining date",
      cell: (info) => info.getValue().toLocaleString(),
    }),
    columnHelper.accessor((row) => row.endDate, {
      id: "End date",
      header: "End date",
      cell: (info) => info.getValue().toLocaleString(),
    }),
    columnHelper.accessor((row) => row.allowedBalance, {
      id: "Allowed balance",
      header: "Allowed balance",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.remainingBalance, {
      id: "Remaining balance",
      header: "Remaining balance",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.billable, {
      id: "Billable",
      header: "Billable",
      cell: (info) =>
        info.getValue() ? (
          <CheckIcon className="text-center m-0 w-7 text-yeollowLightCegedim" />
        ) : (
          <XIcon className="text-center w-7 m-0 text-yeollowLightCegedim" />
        ),
    }),
    columnHelper.accessor((row) => row.isDisabled, {
      id: "Is disabled",
      header: "Is disabled",
      cell: (info) => (info.getValue() ? "Yes" : "No"),
    }),
    columnHelper.accessor((row) => row.team, {
      id: "Teams",
      header: "Teams",
      cell: (info) =>
        info.getValue().map((team) => {
          return <p key={team}>{team}</p>;
        }),
    }),
    columnHelper.accessor((row) => row.fulltime, {
      id: "Fulltime",
      header: "Fulltime",
      cell: (info) => (info.getValue() ? "Yes" : "No"),
    }),
    columnHelper.display({
      id: "View employees",
      cell: ({ row }) => {
        return (
          <button
            className="rounded-full text-white text-sm bg-blueCegedim px-4 py-1 "
            value={row.getValue("Id")}
            onClick={viewEmployeeHandler}
          >
            View
          </button>
        );
      },
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    enableRowSelection: true,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    getCoreRowModel: getCoreRowModel(),
  });

  const viewEmployeeHandler = (event: any) => {
    const id: number = event.target.value;
  };
  return (
    <div className="w-9/12 flex flex-col">
      <ColumnSelect table={table} />
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className=" text-black">
          <thead className="bg-blueCegedim text-lg whitespace-nowrap text-left">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    <div className="mx-2 my-3 text-left">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-base text-left divide-y divide-lightGrey">
            {table.getRowModel().rows.map((row, idx) => (
              <tr
                key={row.id}
                className={idx % 2 == 0 ? "bg-lightGrey bg-opacity-30" : ""}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    <div className="mx-2 ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EmployeeTab;
