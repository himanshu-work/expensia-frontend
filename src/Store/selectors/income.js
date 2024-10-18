import { createSelector } from "@reduxjs/toolkit";

export const selectIncomeState = (state) => state.income;

// this will select the complete state (initial state)
export const selectIncome = createSelector(
  selectIncomeState,
  (incomeStore) => incomeStore?.incomes
);

// now we have to select income state
export const selectIncomeList = createSelector(
  selectIncome,
  (incomeState) => incomeState?.list
);

// now we have to select income state
export const selectIncomeTotalNoOfElements = createSelector(
  selectIncome,
  (incomeState) => incomeState?.total
);
