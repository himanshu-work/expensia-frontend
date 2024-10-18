// import React, { useEffect, useState } from "react";

// import { useSelector } from "react-redux";
// import { fetchTransactions } from "../../Store/reducers/transaction";
// import { selectTransactionList } from "../../Store/selectors/transaction";
// // import { isTokenExpired } from "../../api/authService";

// function TestApi() {
//   const [fetchData, setFetchData] = useState(0);
//   const dispatch = useDispatch();

//   // const transactionList = useSelector(selectTransactionList);

//   useEffect(() => {
//     // dispatch(fetchTransactions());
//   }, [dispatch, fetchData]);

//   // useEffect(() => {
//   //   console.log(transactionList);
//   // }, [transactionList]);

//   return (
//     <>
//       this is created to test API response
//       <div>TestApi</div>
//       <button className="border-2" onClick={() => setFetchData(fetchData + 1)}>
//         Call Api
//       </button>
//     </>
//   );
// }

// export default TestApi;

// // function TestApi() {
// //   const [fetchData, setFetchData] = useState(0);
// //   const dispatch = useDispatch(); // <-- Assuming you have useDispatch imported

// //   const transactionList = useSelector(selectTransactionList);

// //   useEffect(() => {
// //     dispatch(fetchTransactions());
// //     console.log(transactionList);
// //   }, [fetchData]);

// //   // useEffect(() => {
// //   // test the income, investment and expense api.
// //   // console.log(getAllIncomes());
// //   // console.log(getIncome(2));
// //   // console.log(
// //   //   addIncome({
// //   //     amount: 3999,
// //   //     date: "2024-01-23",
// //   //     category: "Salary",
// //   //     description: " from react response",
// //   //     type: "Income",
// //   //   })
// //   // console.log(
// //   //   updateIncome({
// //   //     id: 13,
// //   //     amount: 3999,
// //   //     date: "2024-01-23",
// //   //     category: "Salary",
// //   //     description: " from react response updated",
// //   //     type: "Income",
// //   //   })
// //   // );
// //   // console.log(deleteIncome(13));
// //   // }, [fetchData]);
// //   // useEffect(() => {
// //   // getIncome()
// //   //   .then((response) => console.log(response.data))
// //   //   .catch(() => console.log("could not get the data"));
// //   // console.log(getTransaction(2, "income"));
// //   // console.log(getAllTransaction());
// //   // console.log(
// //   //   addTransaction({
// //   //     name: "correct Ctegoruy invested",
// //   //     amount: 9999000.0,
// //   //     date: "2024-01-20T12:30:45",
// //   //     category: "ETF",
// //   //     description: null,
// //   //     type: "investment",
// //   //   })
// //   // );
// //   // console.log(
// //   //   updateTransaction({
// //   //     id: 1,
// //   //     name: "hello from other side",
// //   //     amount: 390000.0,
// //   //     date: "2024-01-20T12:30:45",
// //   //     category: "Food",
// //   //     description:
// //   //       "new test drom postman sout from incomeserrive updated print",
// //   //     type: "expense",
// //   //   })
// //   // );
// //   // console.log(deleteTransaction(4, "income"));
// //   //   if (isTokenExpired()) {
// //   //     console.log("token is expired");
// //   //   } else {
// //   //     console.log("no the token is not expired");
// //   //   }
// //   // }, [fetchData]);

// //   // useEffect(() => {
// //   //   console.log(getTransaction(2, income));
// //   //   console.log(getAllTransaction());
// //   //   console.log(
// //   //     addTransaction({
// //   //       name: "updated food",
// //   //       amount: 9990.0,
// //   //       date: "2024-01-20T12:30:45",
// //   //       category: "Food",
// //   //       description: null,
// //   //       type: "Expense",
// //   //     })
// //   //   );
// //   //   console.log(
// //   //     updateTransaction({
// //   //       id: 1,
// //   //       name: "dividend",
// //   //       amount: 390000.0,
// //   //       date: "2024-01-20T12:30:45",
// //   //       category: "Food",
// //   //       description: "new description",
// //   //       type: "Expense",
// //   //     })
// //   //   );
// //   //   console.log(eleteTransaction(3, income));
// //   // }, []);

// //   return (
// //     <>
// //       this is created to test API response
// //       <div>TestApi</div>
// //       <button className="border-2	" onClick={() => setFetchData(fetchData + 1)}>
// //         Call Api
// //       </button>
// //     </>
// //   );
// // }

// // export default TestApi;
