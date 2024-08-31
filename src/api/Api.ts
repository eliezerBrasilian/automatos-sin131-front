import axios from "axios";

const automatosApi = axios.create({
  baseURL: `http://localhost:8080/automatos/api/`,
});
const turingApi = axios.create({
  baseURL: `http://localhost:8080/maquina-de-turing/api/`,
});

const api = automatosApi;
export { api, turingApi };
