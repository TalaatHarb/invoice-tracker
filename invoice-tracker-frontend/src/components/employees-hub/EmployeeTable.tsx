import React, { useEffect } from "react";
import { employeeType } from "./types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import ColumnSelect from "./ColumnSelector";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import formatDate from "../../utils/FormatDate";

type employeeTableProps = {
  employees: employeeType[];
};

const EmployeeTab = ({ employees }: employeeTableProps) => {
  const data = employees;
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState({});

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
      cell: (info) => (info.getValue() ? formatDate(info.getValue()) : "N/A"),
    }),
    columnHelper.accessor((row) => row.endDate, {
      id: "End date",
      header: "End date",
      cell: (info) => (info.getValue() ? formatDate(info.getValue()) : "N/A"),
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
    columnHelper.accessor((row) => row.disabled, {
      id: "Is disabled",
      header: "Is disabled",
      cell: (info) => (info.getValue() ? "Yes" : "No"),
    }),
    columnHelper.accessor((row) => row.team, {
      id: "Teams",
      header: "Team Name",
      cell: (info) =>
        info.getValue() && info.getValue().length ? (
          info.getValue().map((team) => {
            return (
              <Link
                className="text-black no-underline block hover:underline"
                key={team.id + team.name}
                to={"/team/" + team.id}
              >
                {team.name}
              </Link>
            );
          })
        ) : (
          <Link
            className="text-black no-underline block hover:underline"
            to={"/team/" + 1}
          >
            <p>Team A</p>
          </Link>
        ),
    }),
    columnHelper.accessor((row) => row.fullTime, {
      id: "Fulltime",
      header: "Fulltime",
      cell: (info) => (info.getValue() ? "Yes" : "No"),
    }),
    columnHelper.display({
      id: "View employees",
      cell: ({ row }) => {
        return (
          <Link to={"/hr/employee/" + row.getValue("Id")}>
            <button
              className="rounded-full text-white text-sm bg-blueCegedim px-4 py-1 "
              value={row.getValue("Id")}
              onClick={viewEmployeeHandler}
            >
              View
            </button>
          </Link>
        );
      },
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    enableRowSelection: true,
    state: {
      columnVisibility,
      rowSelection,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    console.log(rowSelection);
    console.log(columnVisibility);
  });

  const viewEmployeeHandler = (event: any) => {
    const id: number = event.target.value;
  };
  return (
    <div className="w-10/12 flex flex-col py-10">
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
                    <div className="mx-2 py-2 whitespace-nowrap">
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
      <div className="flex items-center gap-2 mt-4">
        <button
          className=" rounded px-1 bg-blueCegedim border-none shadow-lg"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border-none shadow-lg rounded px-2 bg-blueCegedim"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border-none shadow-lg rounded px-2 bg-blueCegedim"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className=" rounded px-1 bg-blueCegedim border-none shadow-lg"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          className="border-2 border-blueCegedim rounded shadow-lg outline-none"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default EmployeeTab;
