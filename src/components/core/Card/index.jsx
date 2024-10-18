import React from "react";

function Card({ label, stats, icon: IconComponent, currency }) {
  const formattedAmount = Number(stats).toLocaleString("en-IN", {
    maximumFractionDigits: 2, // Set the maximum number of fraction digits
  });

  return (
    <div className="card p-5">
      <div className="flex justify-between">
        <p className="text-lg font-semibold card-label">{label}</p>
        {/* <p>icon</p> */}
        {IconComponent && <IconComponent className="icon-card" />}
      </div>
      <p className="text-2xl font-bold pt-3">
        {currency ? currency : ""} ₹ {formattedAmount}
      </p>
    </div>
  );
}

export default Card;
