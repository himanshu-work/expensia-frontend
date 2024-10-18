import React, { useEffect } from "react";
import { TABLE_HEADER_CONFIG } from "../../components/Table/headerConfig";
import { TABLE_COMPONENT_CONFIG } from "../../components/Table/headerConfig";
import Table from "../../components/Table";
import { selectTransactionList } from "../../Store/selectors/transaction";
import {
  createTransactionThunk,
  getAllTransactionsThunk,
} from "../../Store/reducers/transaction";
import { useDispatch, useSelector } from "react-redux";

function TestTable() {
  const mockData = [
    {
      id: 1,
      amount: 1200,
      date: "2023-01-05",
      category: "Housing",
      description: "Monthly rent payment for apartment",
      type: "Expense",
    },
    {
      id: 2,
      amount: 150,
      date: "2023-01-10",
      category: "Transportation",
      description: "Monthly bus pass",
      type: "Expense",
    },
    {
      id: 3,
      amount: 300,
      date: "2023-01-15",
      category: "Food",
      description: "Grocery shopping",
      type: "Expense",
    },
    {
      id: 4,
      amount: 200,
      date: "2023-01-20",
      category: "Healthcare",
      description: "Doctor's visit",
      type: "Expense",
    },
    {
      id: 5,
      amount: 100,
      date: "2023-01-25",
      category: "Clothing",
      description: "New pair of shoes",
      type: "Expense",
    },
    {
      id: 6,
      amount: 80,
      date: "2023-02-05",
      category: "Utility",
      description: "Electricity bill",
      type: "Expense",
    },
    {
      id: 7,
      amount: 50,
      date: "2023-02-10",
      category: "Other",
      description: "Miscellaneous expense",
      type: "Expense",
    },
    {
      id: 8,
      amount: 1250,
      date: "2023-02-15",
      category: "Housing",
      description: "Monthly rent payment for apartment",
      type: "Expense",
    },
    {
      id: 9,
      amount: 180,
      date: "2023-02-20",
      category: "Transportation",
      description: "Monthly bus pass",
      type: "Expense",
    },
    {
      id: 10,
      amount: 350,
      date: "2023-02-25",
      category: "Food",
      description: "Grocery shopping",
      type: "Expense",
    },
    {
      id: 11,
      amount: 220,
      date: "2023-03-05",
      category: "Healthcare",
      description: "Doctor's visit",
      type: "Expense",
    },
    {
      id: 12,
      amount: 90,
      date: "2023-03-10",
      category: "Clothing",
      description: "New pair of shoes",
      type: "Expense",
    },
    {
      id: 13,
      amount: 70,
      date: "2023-03-15",
      category: "Utility",
      description: "Electricity bill",
      type: "Expense",
    },
    {
      id: 14,
      amount: 40,
      date: "2023-03-20",
      category: "Other",
      description: "Miscellaneous expense",
      type: "Expense",
    },
    {
      id: 15,
      amount: 1300,
      date: "2023-03-25",
      category: "Housing",
      description: "Monthly rent payment for apartment",
      type: "Expense",
    },
  ];
  // Assuming you want a total of 60 objects, repeat the mock data
  const totalMockData = [
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
  ].slice(0, 60);

  const dispatch = useDispatch();
  const list = useSelector(selectTransactionList);
  useEffect(() => {
    dispatch(getAllTransactionsThunk());
  }, []);
  function addData() {
    totalMockData.forEach((item) => {
      dispatch(createTransactionThunk(item)).then((result) => {
        console.log("Transaction created:", result);
      });
    });
  }
  const colWidth = ["60px", "120px", "60px", "60px", "60px"];
  return (
    <div>
      <button onClick={addData}> add data</button>
      <Table
        list={list}
        colWidths={colWidth}
        headers={TABLE_HEADER_CONFIG}
        components={TABLE_COMPONENT_CONFIG}
      />
    </div>
  );
}

export default TestTable;
