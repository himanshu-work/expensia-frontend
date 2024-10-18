import React from "react";

function Amount({ data: transaction }) {
  // Convert the label to a number and use toLocaleString to format it
  const formattedAmount = Number(transaction?.amount).toLocaleString("en-IN", {
    maximumFractionDigits: 2, // Set the maximum number of fraction digits
  });

  return (
    <>
      <span>{formattedAmount}</span>{" "}
      <span className="text-xs font-bold">INR</span>
    </>
  );
}

export default Amount;
