import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MANAGE_DEPOSIT_BANK_ACCOUNT_API_REDUCER_KEY = "manageDepositBankAccount";

export const manageDepositBankAccountApi = createApi({
  reducerPath: MANAGE_DEPOSIT_BANK_ACCOUNT_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1/depositbankaccount",
  }),
  tagTypes: ["manageDepositBankAccount"],
  endpoints: (builder) => ({
    getBankAccountData: builder.query({
      query: () => "/get-bank-account-list",
    }),
    updateBankAccountStatus: builder.mutation({
      query: ({ bankAccountId }) => ({
        url: `/active-inactive-bank-account/${bankAccountId}`,
        method: "PUT",
      }),
      invalidatesTags: ["manageDepositBankAccount"],
    }),
    removeDepositBankAccount: builder.mutation({
      query: (bankAccountId) => ({
        url: `/delete-deposite-bank-account/${bankAccountId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["manageDepositBankAccount"],
    }),
  }),
});

export const {
  useGetBankAccountDataQuery,
  useUpdateBankAccountStatusMutation,
  useRemoveDepositBankAccountMutation,
} = manageDepositBankAccountApi;
