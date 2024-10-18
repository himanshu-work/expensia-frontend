import React from "react";
const BADGE_CONFIG = {
  income: {
    label: "credited",
    color: "green-background",
  },
  expense: {
    label: "debited",
    color: "red-background",
  },
  investment: {
    label: "invested",
    color: "blue-background",
  },
};
function Badge({ data: { type } }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className={`badge  ${BADGE_CONFIG[type]?.color} capitalize`}>
        {BADGE_CONFIG[type]?.label}
      </div>
    </div>
  );
}

export default Badge;
