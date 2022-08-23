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
    <form onSubmit={handleSubmit}>
      <label>
        Absenece Type:
        <select value={request.type} name="type" onChange={handleChange}>
          <option value="annual leave">Annual leave</option>
          <option value="sick leave">Sick leave</option>
          <option value="bereavement leave">Bereavement leave</option>
        </select>
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          min={new Date().toISOString().slice(0, 10)}
          required
          onChange={(e) =>
            setRequest({ ...request, startDate: e.target.value })
          }
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          min={request.startDate}
          required
          onChange={(e) => setRequest({ ...request, endDate: e.target.value })}
        />
      </label>
      <label>
        <select
          value={request.fullDay ? "full day" : "half day"}
          name="fullDay"
          onChange={handleChange}
        >
          <option value="full day">Full day</option>
          <option value="half day">Half day</option>
        </select>
      </label>
      <label>
        Notes:
        <textarea
          value={request.comment}
          name="comment"
          onChange={(e) => setRequest({ ...request, comment: e.target.value })}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default RequestForm;
