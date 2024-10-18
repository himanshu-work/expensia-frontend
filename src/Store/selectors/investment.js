import { createSelector } from "@reduxjs/toolkit";

export const selectInvestmentStore = (state) => state.investment;

export const selectInvestmentState = createSelector(
  selectInvestmentStore,
  (investmentsStore) => investmentsStore?.investments
);

export const selectInvestmentList = createSelector(
  selectInvestmentState,
  (investmentsState) => investmentsState.list
);

export const selectInvestmentTotalNoOfElements = createSelector(
  selectInvestmentState,
  (investmentState) => investmentState?.total
);
