import React, { useState } from "react";
import { AbsenseItem } from "../../models/absence-item";

const AbsenceHistoryItem = (props: any): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const deleteItemClickHandler = () => {
    const items = props.items.filter((item: AbsenseItem) => {
      return item.id !== props.record.id;
    });
    props.setItems(items);
  };

  console.log(props.record);

  return (
    <>
      <div className="border border-slate-600 flex justify-between">
        <div className="relative flex items-center py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none">
          <strong>
            {props.record.type} {props.record.startDate.substr(0, 10)},{" "}
            {props.record.fullDay ? "full-day" : "part-day"}{" "}
          </strong>
        </div>
        <div className="py-4 px-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={deleteItemClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={dropDownClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border border-slate-600 items-center py-4 px-5 text-base text-left bg-white rounded-none">
          <div className="">
            <p>
              <strong>Status: </strong> {props.record.status}
            </p>
            <p>
              <strong>Comment: </strong>{" "}
              {props.record.comments ? props.record.comments : "No comment."}
            </p>
            <p>
              <strong>Attachment: </strong>{" "}
              {props.record.attachmentUrl ? (
                <a
                  href={props.record.attachmentUrl}
                  className="text-blueCegedim"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {props.record.attachmentName}
                </a>
              ) : (
                "No Attachment"
              )}
            </p>
            <p>
              <strong>No. of days requested: </strong>{" "}
              {props.record.numberOfDays}
            </p>
            <p>
              <strong>Request Date: </strong>{" "}
              {props.record.requestDate
                ? props.record.requestDate.substr(0, 10)
                : "Unkown"}
            </p>
            <p>
              <strong>End Date: </strong> {props.record.endDate.substr(0, 10)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AbsenceHistoryItem;
