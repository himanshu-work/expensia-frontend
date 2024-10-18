import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import to from "await-to-js";
import {
  getAllInvestmentApi,
  getAllInvestmentPaginatedAndSortedApi,
  getAllInvestmentPaginatedApi,
} from "../../api/investmentService";
import {
  getPaginatedTransactionsByType,
  getTransactionsByTypeApi,
} from "../../api/transactionService";

const appInitState = {
  investments: {
    list: [],
    pageNumber: 1,
    limit: 10,
    total: null,
    isFetching: false,
    hasMore: true,
  },
};

const investmentSlice = createSlice({
  name: "investment",
  initialState: appInitState,
  reducers: {
    setInvestments: (state, action) => {
      state.investments.list = action.payload;
      // console.log("payload received is ", action.payload);
      // console.log("the set data is " + state.investments.list);
    },
    addInvestments: (state, action) => {
      state.investments.list = [...state.investments.list, ...action.payload];
    },
    setTotalNumberOfElements: (state, action) => {
      state.investments.total = action.payload;
    },
  },
});

export const getAllInvestmentsThunk = createAsyncThunk(
  "api/investments",
  async (params, { dispatch }) => {
    const [error, response] = await to(getTransactionsByTypeApi("investment"));
    dispatch(setInvestments(response.data.transactions));
  }
);

export const getPaginatedInvestmentThunk = createAsyncThunk(
  "api/investments",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      getPaginatedTransactionsByType(
        "investment",
        params?.offset,
        params?.pageSize
      )
    );
    dispatch(setTotalNumberOfElements(response.data.totalElements));
    if (response?.data?.number === 0) {
      dispatch(setInvestments(response.data.transactions));
    } else {
      dispatch(addInvestments(response.data.transactions));
    }
  }
);

export const getAllInvestmentPaginatedAndSortedThunk = createAsyncThunk(
  "api/incomes/sortedPaginated",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      getAllInvestmentPaginatedAndSortedApi(
        params?.offset,
        params?.pageSize,
        params?.sortByField,
        params?.orderBy
      )
    );
    dispatch(setTotalNumberOfElements(response.data.totalElements));
    if (response?.data?.number === 0) {
      dispatch(setInvestments(response.data.content));
    } else {
      dispatch(addInvestments(response.data.content));
    }
  }
);

export const { setInvestments, addInvestments, setTotalNumberOfElements } =
  investmentSlice.actions;
export default investmentSlice.reducer;
