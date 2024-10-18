import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { CATEGORY_CONFIG_MODAL } from "./categoryConfig";
import {
  createTransactionThunk,
  updateTransactionThunk,
} from "../../Store/reducers/transaction";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentDate } from "../../common/functions";
import {
  selectModalData,
  selectModalIsOpen,
} from "../../Store/selectors/modal";
import { closeIsModalOpen, resetModalData } from "../../Store/reducers/modal";

// Global Modal Component
function ModalSecond() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const editData = useSelector(selectModalData);

  const [type, setType] = useState(
    pathname.substring(1) === "dashboard" ? "income" : pathname.substring(1)
  ); // if you use useeffect to change later on basis of "dashboard then that wont work"

  const [formData, setFormData] = useState({
    amount: 0,
    date: getCurrentDate(),
    description: "",
    type: type,
    category: "",
  });

  useEffect(() => {
    if (!formData.category) {
      setFormData({
        ...formData,
        category: CATEGORY_CONFIG_MODAL[type]?.defaultData?.category,
        // since type is a variable, you should use square brackets [] to access the property dynamically
      });
    }
    if (editData?.id) {
      setFormData({
        id: editData.id,
        amount: editData.amount,
        date: editData.date,
        description: editData.description,
        type: editData.type,
        category: editData.category,
      });
    }
  }, [type, formData.category]);

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.amount <= 0) {
      alert("Amount should be greater than 0");
    } else if (editData?.id) {
      dispatch(updateTransactionThunk(formData));
      dispatch(closeIsModalOpen());
    } else {
      dispatch(closeIsModalOpen());
      dispatch(
        createTransactionThunk({ ...formData, onSuccess: (transaction) => {} })
      );
    }
  }

  // on unmount reset data
  useEffect(() => {
    return () => {
      dispatch(resetModalData(type));
    };
  }, []);

  function handleOverlayClick() {
    console.log("clicked on OVERLAY");
    dispatch(closeIsModalOpen());
  }

  return (
    <div>
      <div className="blur-overlay" onClick={handleOverlayClick}></div>
      <div className="Modal p-4  text-white">
        <div>
          <p className="text-center py-2 text-lg font-semibold">
            New Transaction
          </p>
        </div>
        <button
          className="btn-close-left"
          onClick={() => {
            dispatch(closeIsModalOpen());
          }}
        >
          <Close />
        </button>
        <div className="main-form p-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4  items-center relative">
              <input
                autoFocus="autofocus"
                type="number"
                className="amount-input p-2 max-w-full text-center"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                className="w-full p-2 bg-suface-color text-white  rounded"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <select
                className="w-full p-2 bg-suface-color text-white  rounded"
                placeholder="type"
                value={formData.type}
                onChange={(e) => {
                  setFormData({ ...formData, type: e.target.value });
                  setType(e.target.value);
                }}
                name="type"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
                <option value="investment">Investment</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Description"
                className="w-full p-2 bg-suface-color text-white rounded"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <select
                className="w-full p-2 bg-suface-color text-white  rounded"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                name="category"
              >
                {CATEGORY_CONFIG_MODAL[type]?.categoryList.map((item) => {
                  return (
                    <option value={item.name} name="category" key={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <div className="mb-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2"
                onChange={(e) =>
                  setFormData({ ...formData, recurring: e.target.value })
                }
              />
              <div>
                <p className="text-sm">Add as recurring</p>
                <p className="text-xs text-gray-600">
                  This transaction will be added again in the following months
                  at the same day as today
                </p>
              </div>
            </label>
          </div> */}
            <div className="text-center">
              <button
                type="submit"
                className=" py-3 px-8 rounded-3xl text-xs border text-white"
              >
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalSecond;
