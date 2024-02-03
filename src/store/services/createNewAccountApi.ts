import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CREATE_ACCOUNT_API_REDUCER_KEY = "loginApi";

export const createNewAccountApi = createApi({
  reducerPath: CREATE_ACCOUNT_API_REDUCER_KEY,
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
    createAccount: builder.mutation({
      query: (reqBody) => {
        return {
          url: "/newuseraccount/create-new-user-account",
          method: "POST",
          body: {
            ...reqBody,
          },
        };
      },
    }),
  }),
});

export const { useCreateAccountMutation } = createNewAccountApi;
