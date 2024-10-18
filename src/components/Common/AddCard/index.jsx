import React from "react";

import { ReactComponent as Add } from "../../../assets/icons/add.svg";
function AddCard() {
  return (
    <div className="add_card p-5 flex items-center text-center justify-center">
      {/* <p
        className="add_circle flex justify-center items-center border-test"
        style={{ fontSize: "4em" }}
      >
        +
      </p> */}
      <p>Add Transaction</p>
    </div>
  );
}

export default AddCard;
