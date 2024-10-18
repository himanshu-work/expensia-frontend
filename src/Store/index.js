import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./reducers/income";
import userReducer from "./reducers/user";
import transactionReducer from "./reducers/transaction";
import expenseReducer from "./reducers/expense";
import modalReducer from "./reducers/modal";
import investmentReducer from "./reducers/investment";
import orderByReducer from "./reducers/orderBy";

const store = configureStore({
  reducer: {
    income: incomeReducer,
    user: userReducer,
    transaction: transactionReducer,
    expense: expenseReducer,
    modal: modalReducer,
    investment: investmentReducer,
    orderBy: orderByReducer,
  },
});

export default store;
