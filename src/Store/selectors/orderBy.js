import { createSelector } from "@reduxjs/toolkit";

export const selectOrderByStore = (state) => state.orderBy;

export const selectorderByField = createSelector(
  selectOrderByStore,
  (orderByStore) => orderByStore?.orderByField
);

export const selectSortingOrder = createSelector(
  selectOrderByStore,
  (orderByStore) => orderByStore?.sortingOrder
);
