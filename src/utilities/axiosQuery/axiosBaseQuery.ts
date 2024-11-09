import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';


export const axiosBaseQuery =
  ({
    baseUrl = '',
    baseHeaders = {}
  }: {
    baseUrl: string;
    baseHeaders?: AxiosRequestConfig['headers'];
    // baseHeaders?: Partial<AxiosRequestHeaders> 
  }): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      body?: AxiosRequestConfig['data'];
      headers?: AxiosRequestConfig['headers'];
      // headers?: Partial<AxiosRequestHeaders> 
    },
    unknown,
    unknown
  > =>
    async ({ url, method = "GET", body, headers = {} }) => {
      try {
        // console.log(baseUrl + url,  baseHeaders, headers);
        const result = await axios({ url: baseUrl + url, method, data: body, headers: { ...baseHeaders, ...headers } });
        return { data: result.data };
      } catch (axiosError) {
        let err = axiosError as AxiosError;
        return {
          error: { data: err.response?.data }
        };
      }
    };
