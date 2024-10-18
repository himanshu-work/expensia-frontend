import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../components/core/Card";
import Navbar from "../../components/core/Navbar";

import { ReactComponent as Bag } from "../../assets/icons/bag.svg";
import { ReactComponent as Piggy } from "../../assets/icons/piggy.svg";
import { ReactComponent as Spent } from "../../assets/icons/spent.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";

import {
  selectSummary,
  selectTransactionList,
  top20TransactionsSelector,
} from "../../Store/selectors/transaction";
import Table from "../../components/Table";

import { setIsModalOpen } from "../../Store/reducers/modal";
import {
  selectSortingOrder,
  selectorderByField,
} from "../../Store/selectors/orderBy";
import Donut from "../../components/Chart";
import { TABLE_HEADER_CONFIG } from "../../components/Table/headerConfig";
import AddBtn from "../../components/core/AddBtn";
import ProfileImage from "../Profile/ProfileImage";
import TestTable from "./testTable";
import { getAllTransactionsThunk } from "../../Store/reducers/transaction";

function Dashboard() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const orderBy = useSelector(selectSortingOrder);
  const orderField = useSelector(selectorderByField);

  const transactionList = useSelector(selectTransactionList);

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
  }, []);

  function sortByField(list, field, order) {
    // Use slice() to create a new array and avoid mutating the original array
    const sortedList = list.slice().sort((a, b) => {
      // Use bracket notation to access the dynamic field
      const valueA = a[field];
      const valueB = b[field];
      // Compare the values based on the specified order (ascending or descending)
      if (order === 1) {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else if (order === 2) {
        return valueB > valueA ? 1 : valueB < valueA ? -1 : 0;
      }
      console.log("default condition ran");
      return 0;
    });
    return sortedList;
  }
  // Create a state variable to hold the sorted list
  const [sortedList, setSortedList] = useState(transactionList);

  // Update the sortedList when orderField or orderBy changes
  useEffect(() => {
    const sortedList = sortByField(transactionList, orderField, orderBy);
    setSortedList(sortedList);
  }, [orderField, orderBy, transactionList]);

  useEffect(() => {
    const sortedList = sortByField(transactionList, orderField, orderBy);
    setSortedList(sortedList);
  }, []);

  const summary = useSelector(selectSummary);
  // const colWidth = ["60px", "120px", "60px", "60px", "60px"];
  return (
    <div className="nav-app">
      <Navbar label="Dashboard" />
      <div className="app-wrapper">
        {/* <TestTable /> */}
        <div className="summary">
          <p className="font-semibold text-xl">Summary</p>
          <div className="dashboard-view my-4">
            <Card label="Total Income" icon={Bag} stats={summary.totalIncome} />

            <Card
              label="Available balance"
              icon={Wallet}
              stats={summary.balance}
            />
            <Card
              label="Total Spent"
              icon={Spent}
              stats={summary.totalExpense}
            />
            <Card
              label="Total Investment"
              icon={Piggy}
              stats={summary.totalInvestment}
            />
            <Card
              label="Total Investment"
              icon={Piggy}
              stats={summary.totalInvestment}
            />
            {/* <Card label="Total Subscription" icon={Play} stats={0} /> */}
          </div>
        </div>
        <Donut
          income={summary.totalIncome}
          expense={summary.totalExpense}
          investment={summary.totalInvestment}
          subscription={0 ?? 0}
        />
        <div onClick={() => dispatch(setIsModalOpen())}>
          <AddBtn />
        </div>
        <p className="my-4 px-10 text-xl font-bold table-title-header">
          Top 20 transactions
        </p>
        <Table list={transactionList} headers={TABLE_HEADER_CONFIG} />
      </div>
    </div>
  );
}

export default Dashboard;
