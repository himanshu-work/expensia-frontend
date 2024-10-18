import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectModalData,
  selectModalIsEditing,
  selectModalType,
} from "../../Store/selectors/modal";
import {
  closeIsModalOpen,
  resetModalData,
  setModalType,
} from "../../Store/reducers/modal";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { CATEGORY_CONFIG_MODAL } from "./categoryConfig";
import { getCurrentDate } from "../../common/functions";
import {
  createTransactionThunk,
  updateTransactionThunk,
} from "../../Store/reducers/transaction";
import { getAllIncomesThunk } from "../../Store/reducers/income";
import { getAllInvestmentsThunk } from "../../Store/reducers/investment";
function Modal() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const type = useSelector(selectModalType);
  const isEditing = useSelector(selectModalIsEditing);

  const [formData, setFormData] = useState({
    amount: 0,
    date: getCurrentDate(),
    description: "",
    type: type,
    category: CATEGORY_CONFIG_MODAL[type]?.defaultData?.category,
  });
  const editData = useSelector(selectModalData);

  // useEffect(() => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     category: CATEGORY_CONFIG_MODAL[type]?.defaultData?.category,
  //   }));
  //   console.log(
  //     "main nahi chal raha",
  //     type,
  //     CATEGORY_CONFIG_MODAL[type]?.defaultData?.category
  //   );
  // }, [type, editData]);

  useEffect(() => {
    if (isEditing) {
      setFormData({
        id: editData.id,
        amount: editData.amount,
        date: editData.dateTime,
        description: editData.description,
        type: editData.type,
        category: editData.category,
        __destroyInfo: {
          id: editData.id,
          type: editData.type,
        },
      });
    } else {
      const calculatedType =
        pathname.substring(1) === "dashboard"
          ? "income"
          : pathname.substring(1);
      setFormData({
        amount: 0,
        date: getCurrentDate(),
        description: "",
        type: calculatedType,
        category: CATEGORY_CONFIG_MODAL[calculatedType].defaultData.category,
      });
    }
  }, []);

  // useEffect(() => {
  //   console.log("type is changed to -- " + type);
  // }, [type]);

  // on unmount reset data
  // useEffect(() => {
  //   return () => {
  //     dispatch(resetModalData(type));
  //   };
  // }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.amount <= 0) {
      alert("Amount should be greater than 0");
    } else if (formData.description.trim() == "") {
      alert("Description cannot be empty");
    } else if (isEditing) {
      await dispatch(updateTransactionThunk({transactionObj: formData}));
      dispatch(closeIsModalOpen());
      updateTableData(formData);
    } else {
      dispatch(
        createTransactionThunk({ ...formData, onSuccess: (transaction) => {} })
      );
      dispatch(closeIsModalOpen());
    }
  }

  const updateTableData = (formData) => {
    if (formData.type == "expense") {
      dispatch(getAllExpensesThunk());
    } else if (formData.type == "investment") {
      dispatch(getAllInvestmentsThunk());
    } else if (formData.type == "income") {
      dispatch(getAllIncomesThunk());
    }
  };

  return (
    <div>
      <div
        className="blur-overlay"
        onClick={() => dispatch(closeIsModalOpen())}
      ></div>
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
                value={formData.dateTime}
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
                  setFormData({
                    ...formData,
                    type: e.target.value,
                  });
                  dispatch(setModalType(e.target.value));
                  // try to use only one setFormData
                  // setType(e.target.value);
                  //change category default vale again
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

export default Modal;
