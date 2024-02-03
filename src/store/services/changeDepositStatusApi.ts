import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { depositSearchTag } from "./depositSearchApi";

const CHANGE_DEPOSIT_STATUS_REDUCER_KEY = "changeDepositStatus";

export const changeDepositStatusApi = createApi({
  reducerPath: CHANGE_DEPOSIT_STATUS_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
  }),
  tagTypes: ["changeDepositStatus"],
  endpoints: (builder) => ({
    updateDepositStatus: builder.mutation({
      query: ({ id, reqBody }) => ({
        url: `/depositrequest/update-deposit-request-status/${id}`,
        method: "PUT",
        body: {
          ...reqBody,
        },
      }),
      invalidatesTags: ["changeDepositStatus"],
    }),
  }),
});

export const { useUpdateDepositStatusMutation } = changeDepositStatusApi;
