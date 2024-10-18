import { createSelector } from "@reduxjs/toolkit";
// basically everything in selector comes from store
// that means if you want to select store then you have to select store as per key of store index.js
// store.transaction will give you initial state of the reducer

export const selectTransactionState = (state) => state.transaction;

// this have whole initial state from here you are selecting transactions object frominitial state
// that means it will return list, isFetching etc
export const selectTransactions = createSelector(
  selectTransactionState,
  (transactionState) => transactionState.transactions
);
// now if you see above selector passed below
// this will help to select list
export const selectTransactionList = createSelector(
  selectTransactions,
  (transactionState) => transactionState?.list
);
export const top10TransactionsSelector = (state) => {
  // Sort transactions by amount in descending order
  const sortedTransactions = state.transaction.transactions.list
    .slice()
    .sort((a, b) => b.amount - a.amount);

  // Return the top 10 transactions
  return sortedTransactions.slice(0, 10);
};

export const top20TransactionsSelector = (state) => {
  // Sort transactions by amount in descending order
  const sortedTransactions = state.transaction.transactions.list
    .slice()
    .sort((a, b) => b.amount - a.amount);

  // Return the top 10 transactions
  return sortedTransactions.slice(0, 20);
};

export const selectSummary = createSelector(
  selectTransactionState,
  (transactionState) => transactionState.summary
);
