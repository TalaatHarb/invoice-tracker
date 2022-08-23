import { useAppSelector } from "../../hooks/toolkit-types";

const initRequest = () => {
  const { ID } = useAppSelector((state) => state.AuthenticationSlice);

  let requestObj = {
    type: "annual leave",
    startDate: new Date(),
    endDate: new Date(),
    requestDate: new Date(),
    isFullDay: true,
    comment: null,
    requestedBy: ID,
    // reviewedBy: null,
    numberOfDays: 1,
  };

  return requestObj;
};

export default initRequest;
