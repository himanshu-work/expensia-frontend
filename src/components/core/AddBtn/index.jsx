import React from "react";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { useDispatch } from "react-redux";
import {
  setIsModalOpen,
  setModalIsEditing,
} from "../../../Store/reducers/modal";

// this is purpose specific compent which opens the modal when clicked
function AddBtn() {
  // set type here
  // and set isEditing off here
  const dispatch = useDispatch();

  return (
    <div className="addbtn p-2 rounded-full flex justify-center items-center text-4xl cursor-pointer">
      <button
        onClick={() => {
          dispatch(setIsModalOpen());
          dispatch(setModalIsEditing(false));
          // dispatch()
        }}
      >
        <Plus />
      </button>
    </div>
  );
}

export default AddBtn;
