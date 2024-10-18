import React from "react";

function Text({ data: { description: label } }) {
  return <div className="pl-3">{label}</div>;
}

export default Text;
