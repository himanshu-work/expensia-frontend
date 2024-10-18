import axios from "axios";
import { BASE_URL } from "./authService";

export const getIncomeApi = (id) => {
  return axios.get(BASE_URL + "/" + id);
};

export const getAllIncomesApi = () => {
  return axios.get(BASE_URL);
};

export const addIncomeApi = (incomeObj) => {
  return axios.post(BASE_URL, incomeObj);
};

export const updateIncomeApi = (incomeObj) => {
  return axios.put(BASE_URL + "/" + incomeObj?.id, incomeObj);
};

export const deleteIncomeApi = (id) => {
  return axios.delete(BASE_URL + "/" + id);
};

export const getAllIncomeAsSortedApi = (sortByField, orderBy) => {
  return axios.get(
    BASE_URL + "/sorted?sortByField=" + sortByField + "&orderBy=" + orderBy
  );
};

export const getAllIncomesPaginatedApi = (offset, pageSize) => {
  return axios.get(
    BASE_URL + "/paginate?offset=" + offset + "&pageSize=" + pageSize
  );
};

export const getAllIncomesPaginatedAndSortedApi = (
  offset,
  pageSize,
  sortByField,
  orderBy
) => {
  // console.log(pageSize, sortByField, orderBy);
  // console.log(
  //   INCOME_BASE_URL +
  //     "/paginateAndSort?offset=" +
  //     offset +
  //     "&pageSize=" +
  //     pageSize +
  //     "&sortByField=" +
  //     sortByField +
  //     "&orderBy=" +
  //     orderBy
  // );
  return axios.get(
    BASE_URL +
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
