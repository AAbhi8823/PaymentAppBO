import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DEPOSIT_SEARCH_API_REDUCER_KEY = "depositSearch";

export const depositSearchApi = createApi({
  reducerPath: DEPOSIT_SEARCH_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
  }),
  tagTypes: ["depositSearch"],
  endpoints: (builder) => ({
    getDepositData: builder.query({
      query: (args) => {
        const {
          amount,
          user_id,
          transaction_id,
          transaction_status,
          transaction_type,
          date_range,
        } = args;
        return {
          url: "/depositrequest/get-deposit-request-list",
          params: {
            amount,
            transaction_id,
            user_id,
            transaction_status,
            transaction_type,
            date_range,
          },
        };
      },
    }),
  }),
});

export const { useGetDepositDataQuery } = depositSearchApi;
