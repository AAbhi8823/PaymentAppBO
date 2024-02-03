import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WITHDRAWAL_BANK_ACCOUNT_API_REDUCER_KEY = "withdrawalBankAccountApi";

export const withdrawalBankAccountApi = createApi({
  reducerPath: WITHDRAWAL_BANK_ACCOUNT_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
    prepareHeaders: (headers) => {
      // headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*"); // This should be set on the server-side
      return headers;
    },
  }),
  tagTypes: ["withdrawalBankAccountApi"],
  endpoints: (builder) => ({
    addBankInformation: builder.mutation({
      query: (reqBody) => ({
        url: `/withdrawalbankaccount/add-bank-account`,
        method: "POST",
        body: {
          ...reqBody,
        },
      }),
    }),
  }),
});

export const { useAddBankInformationMutation } = withdrawalBankAccountApi;
