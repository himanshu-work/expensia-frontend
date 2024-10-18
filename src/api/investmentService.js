import axios from "axios";

const INVESTMENT_BASE_URL =
  "https://expensia-be.onrender.com/expensia/investments";

export const getInvestmentApi = (id) => {
  return axios.get(INVESTMENT_BASE_URL + "/" + id);
};

export const getAllInvestmentApi = () => {
  return axios.get(INVESTMENT_BASE_URL);
};

export const addInvestmentApi = (incomeObj) => {
  return axios.post(INVESTMENT_BASE_URL, incomeObj);
};

export const updateInvestmentApi = (incomeObj) => {
  return axios.put(INVESTMENT_BASE_URL + "/" + incomeObj?.id, incomeObj);
};

export const deleteInvestmentApi = (id) => {
  return axios.delete(INVESTMENT_BASE_URL + "/" + id);
};

export const getAllInvestmentAsSortedApi = (sortByField, orderBy) => {
  return axios.get(
    INVESTMENT_BASE_URL +
      "/sorted?sortByField=" +
      sortByField +
      "&orderBy=" +
      orderBy
  );
};

export const getAllInvestmentPaginatedApi = (offset, pageSize) => {
  return axios.get(
    INVESTMENT_BASE_URL + "/paginate?offset=" + offset + "&pageSize=" + pageSize
  );
};

export const getAllInvestmentPaginatedAndSortedApi = (
  offset,
  pageSize,
  sortByField,
  orderBy
) => {
  return axios.get(
    INVESTMENT_BASE_URL +
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
