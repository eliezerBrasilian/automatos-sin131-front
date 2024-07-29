import axios from "axios";

const apiProd = axios.create({
  baseURL: `http://localhost:8080/automatos/api/`,
});

const api = apiProd;
export { api };
