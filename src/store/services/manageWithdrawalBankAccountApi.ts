import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MANAGE_WITHDRAWAL_BANK_ACCOUNT_API_REDUCER_KEY =
  "manageWithdrawalBankAccount";

export const manageWithdrawalBankAccountApi = createApi({
  reducerPath: MANAGE_WITHDRAWAL_BANK_ACCOUNT_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1//withdrawalbankaccount",
  }),
  tagTypes: ["manageWithdrawalBankAccount"],
  endpoints: (builder) => ({
    getBankAccountData: builder.query({
      query: () => "/get-bank-account-list",
    }),
    updateBankAccountStatus: builder.mutation({
      query: ({ bankAccountId }) => ({
        url: `/active-inactive-bank-account/${bankAccountId}`,
        method: "PUT",
      }),
      invalidatesTags: ["manageWithdrawalBankAccount"],
    }),
    removeWithdrawalBankAccount: builder.mutation({
      query: (bankAccountId) => ({
        url: `/delete-withdrawal-bank-account/${bankAccountId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["manageWithdrawalBankAccount"],
    }),
  }),
});

export const {
  useGetBankAccountDataQuery,
  useUpdateBankAccountStatusMutation,
  useRemoveWithdrawalBankAccountMutation,
} = manageWithdrawalBankAccountApi;
