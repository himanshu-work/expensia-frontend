import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import to from "await-to-js";

import {
  addTransactionApi,
  deleteTransactionApi,
  getAllTransactionApi,
  getTransactionApi,
  updateTransactionApi,
} from "../../api/transactionService";

const appInitState = {
  transactions: {
    list: [],
    pageNumber: 1,
    limit: 10,
    total: null,
    isFetching: false,
    hasMore: true,
  },
  summary: {
    totalIncome: 0,
    totalExpense: 0,
    totalInvestment: 0,
    balance: 0,
  },
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState: appInitState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions.list = action.payload;
      recalculateSummary(state);
    },
    addTransactions(state, action) {
      state.transactions.list = [...state.transactions.list, ...action.payload];
      recalculateSummary(state);
    },
    addSingleTransaction(state, action) {
      state.transactions.list = [...state.transactions.list, action.payload];
      recalculateSummary(state);
    },
    updateTransaction(state, action) {
      state.transactions.list = state.transactions.list.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      recalculateSummary(state);
    },
    deleteTransaction(state, action) {
      state.transactions.list = state.transactions.list.filter(
        (item) => item.id !== action.payload
      );
      recalculateSummary(state);
    },
  },
});

export const getTransactionThunk = createAsyncThunk(
  "transaction/getTransaction",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      getTransactionApi(params.id, params.type)
    );
    if (!error) {
      dispatch(addSingleTransaction(response.data));
    }
    return response;
  }
);

export const getAllTransactionsThunk = createAsyncThunk(
  "transaction/getAllTransactions",
  async (_, { dispatch }) => {
    const [error, response] = await to(getAllTransactionApi());
    if (!error) {
      dispatch(setTransactions(response.data));
    }
    return response;
  }
);

export const createTransactionThunk = createAsyncThunk(
  "transaction/createTransaction",
  async (params, { dispatch }) => {
    const { onSuccess = () => {}, ...rest } = params;
    const [error, response] = await to(addTransactionApi(rest));
    if (!error && response.data) {
      dispatch(addSingleTransaction(response.data));
      onSuccess(response.data);
    }
    return response;
  }
);

export const updateTransactionThunk = createAsyncThunk(
  "transaction/updateTransaction",
  async (params, { dispatch }) => {
    213;
    const [error, response] = await to(
      updateTransactionApi(params.transactionObj)
    );
    if (!error) {
      dispatch(updateTransaction(response.data));
    }
    return response;
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  "transaction/deleteTransaction",
  async (params, { dispatch }) => {
    const [error, response] = await to(deleteTransactionApi(params.id));
    if (!error) {
      dispatch(deleteTransaction(params.id));
    }
    return response;
  }
);

// Helper function to recalculate summary values
const recalculateSummary = (state) => {
  state.summary.totalIncome = calculateTotal(state, "income");
  state.summary.totalExpense = calculateTotal(state, "expense");
  state.summary.totalInvestment = calculateTotal(state, "investment");
  state.summary.balance =
    state.summary.totalIncome - state.summary.totalExpense;
};

// Helper function to calculate total based on type
const calculateTotal = (state, type) => {
  return state.transactions.list
    .filter((item) => item.type === type)
    .reduce((total, item) => total + item.amount, 0);
};

export const {
  setTransactions,
  addTransactions,
  addSingleTransaction,
  updateTransaction,
  deleteTransaction,
} = transactionSlice.actions;

export const transactionThunks = {
  getTransactionThunk,
  getAllTransactionsThunk,
  createTransactionThunk,
  updateTransactionThunk,
  deleteTransactionThunk,
};

export default transactionSlice.reducer;
