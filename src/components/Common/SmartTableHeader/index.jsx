import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSortingOrder,
  selectorderByField,
} from "../../../Store/selectors/orderBy";
import {
  setOrderByField,
  setSortingOrder,
} from "../../../Store/reducers/orderBy";

export const smartTableHeaderConfig = {
  0: "",
  1: "↑",
  2: "↓",
};
function SmartTableHeader({ label, labelKey }) {
  const dispatch = useDispatch();
  const orderByField = useSelector(selectorderByField);
  const sortingOrder = useSelector(selectSortingOrder);

  function handleClick() {
    dispatch(setOrderByField(labelKey));
    dispatch(setSortingOrder(labelKey));
  }
  function check(labelKey) {
    return labelKey == "category" || labelKey == "action";
  }
  function displayIcon(labelKey) {
    if (!check(labelKey)) {
      if (labelKey == orderByField) {
        return smartTableHeaderConfig[sortingOrder];
      }
    }
  }
  return (
    <div
      onClick={() => {
        if (!check(labelKey)) {
          handleClick();
        }
      }}
      className={`${!check(labelKey) ? "cursor-pointer" : ""} px-1`}
      style={{ width: "200px" }}
      key={sortingOrder}
    >
      {label} {displayIcon(labelKey)}
    </div>
  );
}

export default SmartTableHeader;
