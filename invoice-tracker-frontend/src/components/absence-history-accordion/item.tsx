import React, { useState } from "react";
import { AbsenseItem } from "../../models/absence-item";

const AbsenceHistoryItem = (props: any): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempDataTest, setTempDataTest] = useState(props.record);
  const [tempData, setTempData] = useState(props.record);
  const dropDownClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const deleteItemClickHandler = () => {
    const items = props.items.filter((item: AbsenseItem) => {
      return item.id !== props.record.id;
    });
    props.setItems(items);
  };

  const editItemClickHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="border border-slate-600 flex justify-between bg-white shadow-lg">
        <div className="relative flex items-center py-4 px-5 text-base text-gray-800 text-left  border-0 rounded-none transition focus:outline-none">
          <strong>
            {tempData.type} {tempData.startDate.substr(0, 10)},{" "}
            {tempData.fullDay ? "full-day" : "half-day"}{" "}
          </strong>
        </div>
        <div className="py-4 px-5">
          <button onClick={editItemClickHandler}>
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
              <strong>Status: </strong> {tempData.status}
            </p>
            <p>
              <strong>Comment: </strong>{" "}
              {tempData.comment ? tempData.comment : "No comment."}
            </p>
            <p>
              <strong>Attachment: </strong>{" "}
              {tempData.attachmentUrl ? (
                <a
                  href={tempData.attachmentUrl}
                  className="text-blueCegedim"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {tempData.attachmentName}
                </a>
              ) : (
                "No Attachment"
              )}
            </p>
            <p>
              <strong>No. of days requested: </strong> {tempData.numberOfDays}
            </p>
            <p>
              <strong>Request Date: </strong>{" "}
              {tempData.requestDate
                ? tempData.requestDate.substr(0, 10)
                : "Unkown"}
            </p>
            <p>
              <strong>End Date: </strong> {tempData.endDate.substr(0, 10)}
            </p>
          </div>
        </div>
      )}

      {/* TODO: Change this modal to a separate component */}
      {showModal ? (
        <>
          <div className="justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-auto m-8 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="px-8 m-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="m-8 flex items-start justify-between p-5 border-b border-solid rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Leave Request</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      setTempDataTest(props.record);
                    }}
                  >
                    <span className="text-blueCegedim h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="flex-row">
                  <div className="flex-1">
                    <label className="mb-2 mx-auto md:w-6/12 text-lg font-medium text-black dark:text-lightGrey">
                      Absence Type:
                      <select
                        name="type"
                        value={tempDataTest.type}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          const text = e.target.value;
                          setTempDataTest({ ...tempDataTest, type: text });
                        }}
                        className="p-2 mb-6 ml-2 md:w-50 text-md text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
                      >
                        <option value="Annual Leave">Annual leave</option>
                        <option value="Sick Leave">Sick leave</option>
                        <option value="Bereavement Leave">
                          Bereavement Leave
                        </option>
                      </select>
                    </label>
                  </div>

                  <div className="flex-1">
                    <label className="mb-2 mx-auto md:w-6/12 text-lg font-medium text-black dark:text-lightGrey">
                      Start Date:
                      <input
                        type="date"
                        name="startDate"
                        onChange={(e) => {
                          const text = e.target.value;
                          setTempDataTest({ ...tempDataTest, startDate: text });
                        }}
                        min={new Date().toISOString().slice(0, 10)}
                        required
                        className="inline-block p-2 mb-6 ml-2 text-sm text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
                      />
                    </label>
                  </div>

                  <div className="flex-1">
                    <label className="mb-2 text-lg font-medium text-black dark:text-lightGrey">
                      End Date:
                      <input
                        type="date"
                        name="endDate"
                        onChange={(e) => {
                          const text = e.target.value;
                          setTempDataTest({ ...tempDataTest, endDate: text });
                        }}
                        required
                        className="inline-block p-2 mb-6 ml-2 text-sm text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
                      />
                    </label>
                  </div>
                  <label className="mb-2 mx-auto md:w-6/12 text-lg font-medium text-black dark:text-lightGrey">
                    Day Type:
                    <select
                      name="fullDay"
                      value={tempDataTest.fullDay ? "full day" : "half day"}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        const text = e.target.value;
                        setTempDataTest({
                          ...tempDataTest,
                          fullDay:
                            text.toLowerCase() === "full day" ? true : false,
                        });
                      }}
                      className="md:w-2/5 p-2 mb-6 md:ml-4 text-lg text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:text-white dark:focus:darkBlue dark:focus:blueCegedim"
                    >
                      <option
                        value="full day"
                        selected={tempDataTest.fullDay ? true : false}
                      >
                        Full day
                      </option>
                      <option
                        value="half day"
                        selected={tempDataTest.fullDay ? false : true}
                      >
                        Half day
                      </option>
                    </select>
                  </label>

                  <label className="block mb-2 text-lg font-medium text-black dark:text-lightGrey">
                    Comment:
                    <textarea
                      className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="comment"
                      onChange={(e) => {
                        const text = e.target.value;
                        setTempDataTest({ ...tempDataTest, comment: text });
                      }}
                      defaultValue={tempDataTest.comment}
                    />
                  </label>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="bg-lightGrey rounded-md hover:bg-darkGrey background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setTempDataTest(props.record);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className=" text-black font-bold rounded-md bg-blueCegedim text-white uppercase text-sm px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setTempData(tempDataTest);
                      props.setItems(
                        props.items.map((absence: AbsenseItem) => {
                          if (absence.id === props.record.id) {
                            const d1: Date = new Date(tempDataTest.startDate);
                            const d2: Date = new Date(tempDataTest.endDate);
                            const numberOfDays: number =
                              (d2.getTime() - d1.getTime()) /
                              (1000 * 60 * 60 * 24);

                            return {
                              ...absence,
                              comment: tempDataTest.comment,
                              startDate: tempDataTest.startDate,
                              endDate: tempDataTest.endDate,
                              type: tempDataTest.type,
                              numberOfDays: numberOfDays,
                            };
                          }
                          return absence;
                        })
                      );
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AbsenceHistoryItem;
