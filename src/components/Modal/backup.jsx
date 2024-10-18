import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import InputText from "../core/InputText";
import SelectInput from "../core/SelectInput";
import { useDispatch } from "react-redux";
// import { actions } from "../../Store";
import categoryConfig from "./categoryConfig";
import modalContentConfig from "./modalContentConfig";
import generateUniqueId from "../../common/functions";

function ModalBackup({ closeModal, editdata }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  const currid = categoryConfig.modalList.findIndex(
    (item) => item.name === pathname.slice(1)
  );

  const [isActive, setIsActive] = useState(currid >= 0 ? currid : 0);
  const [activeTabName, setActiveTabName] = useState(
    categoryConfig.modalList[isActive].name
  );

  const activeCategoryData = categoryConfig[activeTabName];
  const activeModalData = modalContentConfig[activeTabName];

  // modalContentConfig[categoryConfig.modalList[isActive].name.toLowerCase()];
  // console.log(activeModalData);
  // console.log(activeCategoryData);

  const [data, setData] = useState({
    id: generateUniqueId(),
    ...activeCategoryData.defaultData,
  });
  useEffect(() => {
    if (editdata) {
      setData(editdata);
    }
  }, [editdata]);

  function validateForm() {
    if (parseInt(data.amount) > 0 && data.name.length > 0) {
      console.log(parseInt(data.amount));
      return true;
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();
    console.log("submit form", data.name.length);

    setData({
      id: generateUniqueId(),
      ...activeCategoryData.defaultData,
    });
    closeModal();
  }

  return (
    <div className="Modal">
      <div>
        <p className="text-center py-2">New Transaction</p>
      </div>
      <div className="Modal-header">
        <div className="modal-tabs flex">
          {pathname.slice(1) === "dashboard"
            ? categoryConfig.modalList?.map((item) => (
                <div
                  key={item.id}
                  className={`modal-tab p-3 ${
                    isActive === item.id ? "modal-tab-active" : ""
                  }`}
                  onClick={() => {
                    setIsActive(item.id);
                    setActiveTabName(item.name);
                  }}
                >
                  <p>{item.name}</p>
                </div>
              ))
            : categoryConfig.modalList?.map((item) => (
                <div
                  key={item.id}
                  className={`modal-tab p-3 ${
                    isActive === item.id ? "modal-tab-active" : "modal-inactive"
                  }`}
                >
                  <p>{item.name}</p>
                </div>
              ))}
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="Modal-form p-3">
          <div className="form-header">
            <InputText
              label={activeModalData.name.label}
              placeholder="Salary"
              type={activeModalData.name.type}
              value={data.name}
              handleChange={(val) => setData({ ...data, name: val })}
            />
            <SelectInput
              list={categoryConfig[activeTabName].categoryList}
              label="Category"
              value={data.category}
              handleChange={(val) => setData({ ...data, category: val })}
            />
          </div>
          <div className="grid grid-cols-2 justify-items-center items-center">
            <InputText
              label={activeModalData.amount.label}
              type="Number"
              placeholder="1000"
              note="$"
              classes="form-input"
              value={data.amount}
              handleChange={(val) => setData({ ...data, amount: val })}
            />
            <InputText
              label={activeModalData.date.label}
              type="Date"
              classes="form-input"
              value={data.date}
              handleChange={(val) => setData({ ...data, date: val })}
            />
          </div>
        </div>
        <div className="Modal-form p-3"></div>
        <div className="Modal-action flex justify-end p-2 gap-1">
          <button
            className="py-2 px-5 Modal-add rounded-lg"
            onClick={(e) => handleSubmit(e)}
          >
            Add
          </button>
          <button
            className="py-2 px-5 Modal-cancel  rounded-lg"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalBackup;
