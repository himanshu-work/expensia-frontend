import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllIncomeAsSortedApi,
  getAllIncomesApi,
  getAllIncomesPaginatedAndSortedApi,
  getAllIncomesPaginatedApi,
} from "../../api/incomeService";
import to from "await-to-js";
import {
  getPaginatedTransactionsByType,
  getTransactionsByTypeApi,
} from "../../api/transactionService";

const appInitState = {
  incomes: {
    list: [],
    pageNumber: 1,
    limit: 10,
    total: null,
    isFetching: false,
    hasMore: true,
  },
};

const incomeSlice = createSlice({
  name: "income",
  initialState: appInitState,
  reducers: {
    setIncomes: (state, action) => {
      // console.log("New income data:", action.payload);
      state.incomes.list = action.payload;
    },
    addIncomes: (state, action) => {
      state.incomes.list = [...state.incomes.list, ...action.payload];
    },
    setTotalNumberOfElements: (state, action) => {
      state.incomes.total = action.payload;
      // console.log(action.payload, " setter");
    },
    resetIncomes: (state, action) => {
      state.incomes.list = [];
    },
  },
});

export const getAllIncomesThunk = createAsyncThunk(
  "api/incomes",
  async (params, { dispatch }) => {
    const [error, response] = await to(getTransactionsByTypeApi("income"));
    dispatch(setIncomes(response.data.transactions));
  }
);

export const getPaginatedIncomeThunk = createAsyncThunk(
  "api/incomes",
  async (params, { dispatch }) => {
    // console.log(" the params are ", params?.offset, params?.pageSize);
    const [error, response] = await to(
      getPaginatedTransactionsByType("income", params?.offset, params?.pageSize)
    );
    dispatch(setTotalNumberOfElements(response.data.totalItems));
    if (response?.data?.number === 0) {
      dispatch(setIncomes(response.data.transactions));
    } else {
      dispatch(addIncomes(response.data.transactions));
    }
  }
);

export const getAllIncomesPaginatedAndSortedThunk = createAsyncThunk(
  "api/incomes/sortedPaginated",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      getAllIncomesPaginatedAndSortedApi(
        params?.offset,
        params?.pageSize,
        params?.sortByField,
        params?.orderBy
      )
    );
    dispatch(setTotalNumberOfElements(response.data.totalElements));
    if (response?.data?.number === 0) {
      dispatch(setIncomes(response.data.content));
    } else {
      dispatch(addIncomes(response.data.content));
    }
  }
);

export const getAllIncomesSortedThunk = createAsyncThunk(
  "api/incomes/sorted",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      getPaginatedTransactionsByType(params?.orderBy)
    );
    dispatch(setIncomes(response.data.content));
    // dispatch(setTotalNumberOfElements(response.data.totalElements));
  }
);

export const {
  setIncomes,
  addIncomes,
  setTotalNumberOfElements,
  resetIncomes,
} = incomeSlice.actions;
export default incomeSlice.reducer;
