import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useAppSelector } from "../../hooks/toolkit-types";

interface requestInterface {
  type: string;
  startDate: string;
  endDate: string;
  requestDate: string;
  fullDay: boolean;
  comment: string;
  requestedBy: number;
  // reviewedBy: number | null;
  numberOfDays: number;
}

const RequestForm = () => {
  const navigate = useNavigate();
  const { ID } = useAppSelector((state) => state.AuthenticationSlice);
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  );

  const [request, setRequest] = useState<requestInterface>({
    type: "annual leave",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    requestDate: new Date().toISOString().slice(0, 10),
    fullDay: true,
    comment: "",
    requestedBy: +ID,
    // reviewedBy: null,
    numberOfDays: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const field: string = e.target.name;
    let value: any = e.target.value;

    if (field === "fullDay") value = value === "full day" ? true : false;

    setRequest({
      ...request,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(request);
    const d1: Date = new Date(request.startDate);
    const d2: Date = new Date(request.endDate);
    const numberOfDays: number =
      (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);
    request.numberOfDays = numberOfDays;

    axios
      .post("http://localhost:8080/api/user/absence", request, {
        headers: { Authorization: `Bearer ${isAuthenticated}` },
      })
      .then((response) => {
        console.log(response);
        alert("Your request is sent and being processed.");
        navigate("/employee");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="containerr py-10 h-screen b bg-lightGrey">
      <form
        className="mx-auto pb-20 px-10 rounded-2xl bg-white w-4/5"
        onSubmit={handleSubmit}
      >
        <div className="font-semibold w-full h-16 mb-10 p-5 text-white rounded-xl text-xl bg-blueCegedim text-center">
          Absence Request
        </div>
        <label className="block mb-2 mx-auto md:w-6/12 text-lg font-medium text-black dark:text-lightGrey">
          Absenece Type:
          <select
            value={request.type}
            name="type"
            onChange={handleChange}
            className="inline-block p-2 mb-6 ml-2 md:w-50 text-md text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
          >
            <option value="annual leave">Annual leave</option>
            <option value="sick leave">Sick leave</option>
            <option value="bereavement leave">Bereavement leave</option>
          </select>
        </label>

        <label className="float-left mb-2 mx-auto text-lg font-medium text-black dark:text-lightGrey">
          Start Date:
          <input
            type="date"
            name="startDate"
            min={new Date().toISOString().slice(0, 10)}
            required
            onChange={(e) =>
              setRequest({ ...request, startDate: e.target.value })
            }
            className="inline-block p-2 mb-6 ml-2 text-sm text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
          />
        </label>

        <label>
          <select
            value={request.fullDay ? "full day" : "half day"}
            name="fullDay"
            onChange={handleChange}
            className="md:float-right md:w-2/5 p-2 mb-6 md:ml-4 text-lg text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
          >
            <option value="full day">Full day</option>
            <option value="half day">Half day</option>
          </select>
        </label>
        <div className="clear-both"></div>
        <label className=" mb-2 text-lg font-medium text-black dark:text-lightGrey">
          End Date:
          <input
            type="date"
            name="endDate"
            min={request.startDate}
            required
            onChange={(e) =>
              setRequest({ ...request, endDate: e.target.value })
            }
            className="inline-block p-2 mb-6 ml-2 text-sm text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
          />
        </label>

        <label className="block mb-2 text-lg font-medium text-black dark:text-lightGrey">
          Notes:
          <textarea
            className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={request.comment}
            name="comment"
            onChange={(e) =>
              setRequest({ ...request, comment: e.target.value })
            }
          />
        </label>

        <input
          className="mt-5 cursor-pointer float-right text-white bg-blueCegedim hover:bg-darkGrey focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default RequestForm;
