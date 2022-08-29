import React from "react";

const formatDate = (date: Date | undefined) => {
  let newDate = new Date(date?.toString() + "");
  const dateFormat: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return newDate.toLocaleString("en-US", dateFormat);
};

export default formatDate;
