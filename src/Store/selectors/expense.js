import { createSelector } from "@reduxjs/toolkit";

export const selectExpenseStore = (state) => state.expense;

export const selectExpenseState = createSelector(
  selectExpenseStore,
  (expenseStore) => expenseStore?.expenses
);

export const selectExpenseList = createSelector(
  selectExpenseState,
  (expenseState) => expenseState?.list
);

export const selectExpenseTotalNoElements = createSelector(
  selectExpenseState,
  (expenseState) => expenseState?.total
);
