import axios, { AxiosRequestHeaders } from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import { store } from "../../store";
import { setCredential } from "../../store/auth";
import { Auth } from "../../store/auth/interface";
import { ValidateResponseError } from "../errorValidations";

export const initInterceptors = () => {
  axios.interceptors.request.use(
    async (config) => {
      const result: string = reactLocalStorage.get("@lendsqr_user");
      const token = result ? (JSON.parse(result) as Auth).access_token : null;
      // console.log("intercepting", token)
      // console.log(config.headers)
      config.headers = { ...config.headers } as AxiosRequestHeaders;
      // console.log(process)
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      // console.log(config.headers);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const result: string = reactLocalStorage.get("@lendsqr_user");
      const token = result ? (JSON.parse(result) as Auth).access_token : null;
      const authError = ValidateResponseError(error.response, token);
      // console.log(error, authError)
      if (token && authError) {
        store.dispatch(setCredential({}));
      }

      return Promise.reject(error);
    }
  );
};
