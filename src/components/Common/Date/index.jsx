import React from "react";

function DateComponent({ data: { dateTime } }) {
  const formattedDate = new Date(dateTime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // const stringDate = dateToString();
  return <div className="">{formattedDate}</div>;
}

export default DateComponent;
