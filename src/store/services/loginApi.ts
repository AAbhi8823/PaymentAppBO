import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const LOGIN_API_REDUCER_KEY = "signInApi";

export const loginApi = createApi({
  reducerPath: LOGIN_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.mutation({
      query: (reqBody) => {
        return {
          url: "/user/login-user",
          method: "POST",
          body: {
            ...reqBody,
          },
        };
      },
    }),
  }),
});

export const { useGetAccessTokenMutation } = loginApi;
