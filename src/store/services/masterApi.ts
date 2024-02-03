import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MASTER_API_REDUCER_KEY = "masterApi";

export const masterApi = createApi({
  reducerPath: MASTER_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wat2xkrydv.ap-south-1.awsapprunner.com/api/v1",
  }),
  endpoints: (builder) => ({
    getMasterData: builder.query({
      query: () => "/masterlist/get-master-list",
    }),
  }),
});

export const { useGetMasterDataQuery } = masterApi;
