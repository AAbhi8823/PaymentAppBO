import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MANAGE_UPI_REDUCER_KEY = "manageUpi";

export const manageUpi = createApi({
  reducerPath: MANAGE_UPI_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1/upi",
  }),
  tagTypes: ["manageUpi"],
  endpoints: (builder) => ({
    getUpiList: builder.query({
      query: () => "/get-upi-list",
    }),
    addUpiId: builder.mutation({
      query: (reqBody) => ({
        url: `/add-upi`,
        method: "POST",
        body: {
          ...reqBody,
        },
      }),
    }),
    updateUpiId: builder.mutation({
      query: ({ id, reqBody }) => ({
        url: `/update-upi/${id}`,
        method: "PUT",
        body: {
          ...reqBody,
        },
      }),
      invalidatesTags: ["manageUpi"],
    }),
    removeUpiId: builder.mutation({
      query: (id) => ({
        url: `/delete-upi/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUpiListQuery,
  useRemoveUpiIdMutation,
  useAddUpiIdMutation,
  useUpdateUpiIdMutation,
} = manageUpi;
