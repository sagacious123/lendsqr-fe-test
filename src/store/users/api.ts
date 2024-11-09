import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl, convertObjectToURLParams } from "../../utilities/requests";
import { GetUsersPayload, UsersList } from "./interface";

export const usersApi = createApi({
  refetchOnReconnect: true,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersList, GetUsersPayload>({
      query: (query) => ({
        url: `?${convertObjectToURLParams({
          ...query,
          access_token: process.env.REACT_APP_API_TOKEN,
        })}`,
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "skip-browser-warning",
        },
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
