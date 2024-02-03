import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CHANGE_WITHDRAWAL_STATUS_REDUCER_KEY = "changeWithdrawalStatus";

export const changeWithdrawalStatusApi = createApi({
  reducerPath: CHANGE_WITHDRAWAL_STATUS_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
  }),
  tagTypes: ["changeWithdrawalStatus"],
  endpoints: (builder) => ({
    updateWithdrawalStatus: builder.mutation({
      query: ({ id, reqBody }) => ({
        url: `/withdrawalrequest/update-withdrawal-request-status/${id}`,
        method: "PUT",
        body: {
          ...reqBody,
        },
      }),
      invalidatesTags: ["changeWithdrawalStatus"],
    }),
  }),
});

export const { useUpdateWithdrawalStatusMutation } = changeWithdrawalStatusApi;
