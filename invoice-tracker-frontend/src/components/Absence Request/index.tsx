import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppSelector } from "../../hooks/toolkit-types";
import { toast } from "react-toastify";
import { SERVER, TWENTY_MEGAS } from "../../utils/config";
import { isValidAttachmentType } from "../../utils/helper";
import { CONSTANTS } from "../../utils/constants";
import Navbar from "../../components/Navbar";

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
  const [attachments, setAttachments] = useState([] as File[]);
  // const [requestId, setRequestId] = useState<number>();
  let requestId: number;
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [isBadFiles, setIsBadFiles] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const field: string = e.target.name;
    let value: any = e.target.value;

    if (field === "fullDay") value = value === "full day" ? true : false;

    setRequest({
      ...request,
      [field]: value,
    });
  };

  const handleFileChange = async (e: any) => {
    const formData = new FormData();
    setAttachments([]);
    const { files }: { files: File[] } = e.target;

    let filesTotalSize = 0;

    for (const file of files) {
      // console.log(file);
      const { type } = file;
      if (isValidAttachmentType(file.type)) {
        toast.error("please enter only an image or a document");
        setIsBadFiles(true);
        return;
      }
      filesTotalSize += file.size;
      console.log(file.type);
      formData.append("attachments", file);
    }
    if (filesTotalSize > TWENTY_MEGAS) {
      toast.error("Attachments exceeded 20 mb");
      setIsBadFiles(true);
      return;
    }
    console.log(filesTotalSize);
    setAttachments(files);
    console.log(attachments);
    setFormData(formData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isBadFiles) {
      return alert("Please upload correct files");
    }
    e.preventDefault();
    console.log(request);
    const d1: Date = new Date(request.startDate);
    const d2: Date = new Date(request.endDate);
    const numberOfDays: number =
      (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24) + 1;
    request.numberOfDays = numberOfDays;

    axios
      .post(`${CONSTANTS.BACKEND_URL}/api/user/absence`, request, {
        headers: { Authorization: `Bearer ${isAuthenticated}` },
      })
      .then((response) => {
        console.log(response.data);
        requestId = response.data;
        alert("Your request is sent and being processed.");
        alert(
          `You made a request on ${request.requestDate} to have ${
            request.type
          } from ${request.startDate} to ${request.endDate} (${
            request.fullDay ? "full day" : "half day"
          }) - ${request.numberOfDays} ${
            request.numberOfDays > 1 ? "days" : "day"
          } and this is your note: '${request.comment}'`
        );
        if (attachments.length === 0) navigate("/employee");
      })
      .then(() => {
        if (attachments.length === 0) return;
        console.log(requestId);
        axios
          .post(
            `${CONSTANTS.BACKEND_URL}/api/attachments/upload?reqId=${requestId}`,
            formData,
            {
              headers: { Authorization: `Bearer ${isAuthenticated}` },
            }
          )
          .then(() => {
            navigate("/employee");
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div className="containerr py-10 h-screen b bg-lightGrey">
        <form
          className="mx-auto pb-20 px-10 rounded-2xl bg-white w-4/5"
          onSubmit={handleSubmit}
        >
          <div className="font-semibold w-full h-16 mb-10 p-5 text-white rounded-xl text-xl bg-blueCegedim text-center">
            Absence Request
          </div>
          <label className="block mb-2 mx-auto md:w-6/12 text-lg font-medium text-black">
            Absenece Type:
            <select
              id="selectAbsenceTypeDropDown"
              value={request.type}
              name="type"
              onChange={handleChange}
              className="inline-block p-2 mb-6 ml-2 md:w-50 text-md text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim dark:focus:darkBlue dark:focus:blueCegedim"
            >
              <option value="annual leave">Annual leave</option>
              <option value="sick leave">Sick leave</option>
              <option value="bereavement leave">Bereavement leave</option>
            </select>
          </label>

          <label className="float-left mb-2 mx-auto text-lg font-medium text-black">
            Start Date:
            <input
              id="selectStartDateInput"
              type="date"
              name="startDate"
              min={new Date().toISOString().slice(0, 10)}
              required
              onChange={(e) =>
                setRequest({ ...request, startDate: e.target.value })
              }
              className="inline-block p-2 mb-6 ml-2 text-sm text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim  dark:focus:darkBlue dark:focus:blueCegedim"
            />
          </label>

          <label>
            <select
              id="selectIsFullDayDropDown"
              value={request.fullDay ? "full day" : "half day"}
              name="fullDay"
              onChange={handleChange}
              className="md:float-right md:w-2/5 p-2 mb-6 md:ml-4 text-lg text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim  dark:focus:darkBlue dark:focus:blueCegedim"
            >
              <option value="full day">Full day</option>
              <option value="half day">Half day</option>
            </select>
          </label>
          <div className="clear-both"></div>
          <label className=" mb-2 text-lg font-medium text-black ">
            End Date:
            <input
              id="selectEndDateInput"
              type="date"
              name="endDate"
              min={request.startDate}
              required
              onChange={(e) =>
                setRequest({ ...request, endDate: e.target.value })
              }
              className="inline-block p-2 mb-6 ml-2 text-sm text-darkGrey bg-white rounded-lg border border-darkGrey focus:blueCegedim focus:darkBlue dark:darkGrey dark:placeholder-yellowDarkCegedim  dark:focus:darkBlue dark:focus:blueCegedim"
            />
          </label>

          <label className="block mb-2 text-lg font-medium text-black ">
            Notes:
            <textarea
              id="addCommentInput"
              className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={request.comment}
              name="comment"
              onChange={(e) =>
                setRequest({ ...request, comment: e.target.value })
              }
            />
          </label>

          <input
            id="attachFilesInput"
            type="file"
            multiple
            onChange={handleFileChange}
          />

          <input
            id="submitAbsenceRequestForm"
            className="mt-5 cursor-pointer float-right text-white bg-blueCegedim hover:bg-darkGrey focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default RequestForm;
