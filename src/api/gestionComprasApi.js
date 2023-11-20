import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const gestionComprasApi = axios.create({
   baseURL: VITE_API_URL,
});

//Todo: configurar interceptores
gestionComprasApi.interceptors.request.use((config) => {
   config.headers = {
      ...config.headers,
      "x-token": localStorage.getItem("token"),
   };

   return config;
});

export default gestionComprasApi;
