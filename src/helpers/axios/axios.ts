import axios, { AxiosError, AxiosResponse } from "axios";
const { REQUEST_MANAGER_URL }: any = process.env;

//import { response } from 'express';

//*************** interface ************************//
import { HttpCode } from "../response.type";
import { ValidateErrorEndpoint } from "./axios.type";

/**
 * Respuesta exitosa interceptor axios
 * @param response objeto de respuesta exitosa axios
 */
export const onFullfilled = (response: AxiosResponse) => {
  return response;
};

/**
 * Respuesta de error interceptor axios
 * @param error objeto con los datos de error de una respuesta axios
 * @validateError arreglo de objetos con la url y el status de error a validar de acuerdo a un endpoint
 * @method onRejected interceptor de respuesta de error axios
 */
const validateError: Array<ValidateErrorEndpoint> = [
  { url: `${REQUEST_MANAGER_URL}/v1/request`, status: HttpCode.CONFLICT },
];
export const onRejected = (error: AxiosError) => {
  let message = error.message;

  if (
    error.response &&
    error.response.status == HttpCode.NOT_FOUND &&
    error.config
  )
    message = message + "." + error.config.url;
  let response = validateError.find(
    (item) =>
      item.url === error.config?.url && item.status === error.response?.status
  );
  if (response) {
    return Promise.reject(error.response?.data);
  } else {
    throw new Error(message);
  }
};

axios.interceptors.response.use(onFullfilled, onRejected);

const Axios = axios;

export default Axios;
