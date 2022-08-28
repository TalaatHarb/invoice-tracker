import React from 'react'
import Button from '../Button';
import { useNavigate } from "react-router-dom";

const RequestCard = (props:any) => {
    const navigate = useNavigate();
  return (
    <div className="w-80 text-center  bg-white rounded ">
    <div className="bg-blueCegedim">
      <h1 className="font-semibold w-40 h-16 ml-20 p-5 text-white rounded-xl text-xl  ">
        All absence
      </h1>
    </div>
    <div className="p-6">
      <div className="flex justify-between">
        {props.requests.map((req:any) => (
          <div className=" text-center mt-10  text-lg " key={req.name}>
            <h1 className="  p-1 rounded">{req.name}</h1>
            <p className="mt-10 "> {req.numberOfDays}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="mt-10  rounded  text-lg ">
          Anuual leaves to take
        </h1>
        <p className="mt-12  "> {props.allowedBalance}/{props.remainingBalance}</p>
        <Button
          onClick={() => {
            navigate("/request");
          }}
          className="mt-9"
        >
          Request time off
        </Button>
      </div>
    </div>
  </div>
  )
}

export default RequestCard