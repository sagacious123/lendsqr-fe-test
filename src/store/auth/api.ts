import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl } from "../../utilities/requests";
import { IResponse, LoginPayload } from "./interface";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/users/` }),
  endpoints: (builder) => ({
    login: builder.mutation<IResponse, LoginPayload>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
