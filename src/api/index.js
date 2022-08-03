import axios from "axios";
const api = axios.create({ baseURL: "/api" });

export const getAccount = () => {
  return api.get("/accounts");
};

export const getInvoice = () => {
  return api.get("/invoices");
};
