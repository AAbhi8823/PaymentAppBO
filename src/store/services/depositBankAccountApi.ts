import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DEPOSIT_BANK_ACCOUNT_API_REDUCER_KEY = "depositBankAccountApi";

export const depositBankAccountApi = createApi({
  reducerPath: DEPOSIT_BANK_ACCOUNT_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*"); // This should be set on the server-side
      return headers;
    },
  }),
  tagTypes: ["depositBankAccountApi"],
  endpoints: (builder) => ({
    addBankInformation: builder.mutation({
      query: (reqBody) => ({
        url: `depositbankaccount/add-deposit-bank-account`,
        method: "POST",
        body: {
          ...reqBody,
        },
      }),
    }),
  }),
});

export const { useAddBankInformationMutation } = depositBankAccountApi;
