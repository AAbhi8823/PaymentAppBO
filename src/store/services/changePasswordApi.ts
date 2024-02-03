import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CHANGE_PASSWORD_API_REDUCER_KEY = "changePasswordApi";

export const changePasswordApi = createApi({
  reducerPath: CHANGE_PASSWORD_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("authToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    updateNewPassword: builder.mutation({
      query: (reqBody) => {
        return {
          url: "/user/change-password",
          method: "POST",
          body: {
            ...reqBody,
          },
        };
      },
    }),
  }),
});

export const { useUpdateNewPasswordMutation } = changePasswordApi;
