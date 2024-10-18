// categoryConfig.js
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

const CATEGORIES = {
  INCOME: [
    { id: 0, name: "Salary" },
    { id: 1, name: "Investments" },
    { id: 2, name: "Dividends" },
    { id: 2, name: "Rental" },
    { id: 3, name: "Other" },
  ],
  EXPENSE: [
    { id: 0, name: "Housing" },
    { id: 1, name: "Transportation" },
    { id: 2, name: "Food" },
    { id: 3, name: "Healthcare" },
    { id: 4, name: "Clothing" },
    { id: 5, name: "Utility" },
    { id: 6, name: "Other " },
  ],
  INVESTMENT: [
    { id: 0, name: "Stocks" },
    { id: 1, name: "Mutual Funds" },
    { id: 2, name: "Bonds" },
    { id: 3, name: "Gold" },
    { id: 4, name: "Real estate" },
    { id: 5, name: "Other" },
  ],
};

export const CATEGORY_CONFIG_MODAL = {
  income: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: CATEGORIES.INCOME[0].name,
      type: "income",
    },
    categoryList: CATEGORIES.INCOME,
  },
  expense: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: CATEGORIES.EXPENSE[0].name,
      type: "income",
    },
    categoryList: CATEGORIES.EXPENSE,
  },
  investment: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: CATEGORIES.INVESTMENT[0].name,
      type: "income",
    },
    categoryList: CATEGORIES.INVESTMENT,
  },
};

// subscription: {
//   defaultData: {
//     name: "",
//     amount: 0,
//     date: formattedDate,
//     category: "Monthly",
//   },
//   categoryList: [
//     { id: 0, name: "Monthly" },
//     { id: 1, name: "Quarterly" },
//     { id: 2, name: "Yearly" },
//   ],
// },
