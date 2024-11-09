import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl } from "../../utilities/requests";
import { IResponse, User } from "../auth/interface";
import {
  ProfileInformationResponse,
  ChangePasswordPayload,
  UpdateProfilePayload,
  DocumentUploadPayload,
  ChangeProfilePayload,
  ChangeProfileResponse,
  CancelProfileRequestResponse,
  CancelProfileRequestPayload,
} from "./interface";

export const profileApi = createApi({
  refetchOnReconnect: true,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  reducerPath: "profileApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/users` }),
  endpoints: (builder) => ({
    getProfileInformation: builder.query<ProfileInformationResponse, void>({
      query: () => ({
        url: "/get-profile",
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "skip-browser-warning",
        },
      }),
    }),
    updateProfile: builder.mutation<ProfileInformationResponse, UpdateProfilePayload>({
      query: (credentials) => ({
        url: "/update",
        method: "PUT",
        body: credentials,
      }),
    }),
    changePassword: builder.mutation<IResponse, ChangePasswordPayload>({
      query: (credentials) => ({
        url: "/change-password",
        method: "POST",
        body: credentials,
      }),
    }),
    changeProfile: builder.mutation<ChangeProfileResponse, ChangeProfilePayload>({
      query: (credentials) => ({
        url: "/change-user-data",
        method: "POST",
        body: credentials,
      }),
    }),
    uploadFile: builder.mutation<ProfileInformationResponse, DocumentUploadPayload>({
      query: ({ file, fileClass }) => ({
        url: `/document-upload?fileClass=${fileClass}`,
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
        body: file,
      }),
    }),
    cancelProfileChangeRequest: builder.mutation<CancelProfileRequestResponse, CancelProfileRequestPayload>({
      query: (payload) => ({
        url: `/delete-user-request/${payload}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProfileInformationQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useChangeProfileMutation,
  useCancelProfileChangeRequestMutation,
  useUploadFileMutation,
} = profileApi;
