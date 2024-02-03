import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WITHDRAWAL_SEARCH_API_REDUCER_KEY = "withdrawalSearch";

export const withdrawalSearchApi = createApi({
  reducerPath: WITHDRAWAL_SEARCH_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
  }),
  tagTypes: ["withdrawalSearch"],
  endpoints: (builder) => ({
    getWithdrawalData: builder.query({
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
          url: "/withdrawal/get-withdrawal",
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

export const { useGetWithdrawalDataQuery } = withdrawalSearchApi;
