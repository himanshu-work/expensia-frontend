import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllExpensePaginatedAndSortedApi,
  getAllExpensePaginatedApi,
  getAllExpensesApi,
} from "../../api/expenseService";
import to from "await-to-js";
import { getTransactionsByTypeApi } from "../../api/transactionService";

const initState = {
  expenses: {
    list: [],
    pageNumber: 1,
    limit: 10,
    total: null,
    isFetching: false,
    hasMore: true,
  },
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initState,
  reducers: {
    setExpenses: (state, action) => {
      state.expenses.list = action.payload;
    },
    addExpenses: (state, action) => {
      state.expenses.list = [...state.expenses.list, ...action.payload];
    },
    setTotalNumberOfElements: (state, action) => {
      state.expenses.total = action.payload;
    },
  },
});

export const getAllExpensesThunk = createAsyncThunk(
  "api/expenses/getAllExpensesThunk",
  async (params, { dispatch }) => {
    const [error, response] = await to(getTransactionsByTypeApi("expense"));
    dispatch(setExpenses(response.data.transactions));
  }
);

export const getPaginatedExpenseThunk = createAsyncThunk(
  "api/expense",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      getAllExpensePaginatedApi(params?.offset, params?.pageSize)
    );
    dispatch(setTotalNumberOfElements(response.data.totalElements));
    if (response?.data?.number === 0) {
      dispatch(setExpenses(response.data.content));
    } else {
      dispatch(addExpenses(response.data.content));
    }
  }
);

export const getAllExpensesPaginatedAndSortedThunk = createAsyncThunk(
  "api/expense/sortedPaginated",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      getAllExpensePaginatedAndSortedApi(
        params?.offset,
        params?.pageSize,
        params?.sortByField,
        params?.orderBy
      )
    );

    dispatch(setTotalNumberOfElements(response.data.totalElements));
    if (response?.data?.number === 0) {
      dispatch(setExpenses(response.data.content));
    } else {
      dispatch(addExpenses(response.data.content));
    }
  }
);

export const { setExpenses, addExpenses, setTotalNumberOfElements } =
  expenseSlice.actions;
export default expenseSlice.reducer;
