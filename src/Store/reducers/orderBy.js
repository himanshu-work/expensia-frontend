import { createSlice } from "@reduxjs/toolkit";

const appInitState = {
  orderByField: "default",
  sortingOrder: 0,
};

const orderBySlice = createSlice({
  name: "orderBy",
  initialState: appInitState,
  reducers: {
    setOrderByField: (state, action) => {
      if (state.orderByField != action.payload) {
        state.sortingOrder = 0;
      }
      state.orderByField = action.payload;
    },
    setSortingOrder: (state, action) => {
      state.sortingOrder = (state.sortingOrder + 1) % 3;
    },
  },
});

export const { setOrderByField, setSortingOrder } = orderBySlice.actions;
export default orderBySlice.reducer;
