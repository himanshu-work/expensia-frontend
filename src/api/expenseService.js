import axios from "axios";

const EXPENSE_BASE_URL = "https://expensia-be.onrender.com/expensia/expenses";

export const getExpenseApi = (id) => {
  return axios.get(EXPENSE_BASE_URL + "/" + id);
};

export const getAllExpensesApi = () => {
  console.log("expense list request received ");
  return axios.get(EXPENSE_BASE_URL);
};

export const addExpenseApi = (expenseObj) => {
  return axios.post(EXPENSE_BASE_URL, expenseObj);
};

export const updateExpenseApi = (expenseObj) => {
  return axios.put(EXPENSE_BASE_URL + "/" + expenseObj?.id, expenseObj);
};

export const deleteExpenseApi = (id) => {
  return axios.delete(EXPENSE_BASE_URL + "/" + id);
};

export const getAllExpenseAsSortedApi = (sortByField, orderBy) => {
  return axios.get(
    EXPENSE_BASE_URL +
      "/sorted?sortByField=" +
      sortByField +
      "&orderBy=" +
      orderBy
  );
};

export const getAllExpensePaginatedApi = (offset, pageSize) => {
  return axios.get(
    EXPENSE_BASE_URL + "/paginate?offset=" + offset + "&pageSize=" + pageSize
  );
};

export const getAllExpensePaginatedAndSortedApi = (
  offset,
  pageSize,
  sortByField,
  orderBy
) => {
  return axios.get(
    EXPENSE_BASE_URL +
      "/paginateAndSort?offset=" +
      offset +
      "&pageSize=" +
      pageSize +
      "&sortByField=" +
      sortByField +
      "&orderBy=" +
      orderBy
  );
};
