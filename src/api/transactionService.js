import axios from "axios";
import { BASE_URL } from "./authService";

let URL = BASE_URL + "/transactions";

export const getTransactionApi = (id, type) => {
  return axios.get(`${URL}/?type=${type}&id=${id}`);
};

export const getTransactionsByTypeApi = (type) => {
  return axios.get(`${URL}/?type=${type}`);
};

export const getPaginatedTransactionsByType = (type, page, limit) => {
  return axios.get(`${URL}/?type=${type}&page=${page}&limit=${limit}`);
};

export const getAllTransactionApi = () => {
  return axios.get(URL);
};

export const addTransactionApi = (transactionObj) => {
  return axios.post(URL, transactionObj);
};

export const updateTransactionApi = (transactionObj) => {
  return axios.put(`${URL}/${transactionObj.id}`, transactionObj);
};

export const deleteTransactionApi = (id) => {
  return axios.delete(`${URL}/${id}`);
};
