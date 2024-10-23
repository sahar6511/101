import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),
  endpoints: (builder) => ({
    addNewCustomer:builder.mutation({
        query:(newCustomer) => ({
            url:'customers',
            method:'POST',
            body:newCustomer,
        }),
        invalidatesTags:['newCustomer']
    }),
    getCustomerById: builder.query({
      query: (id) => `customers/${id}`,
    }),



  }),
});


export const {useAddNewCustomerMutation,useGetCustomerByIdQuery} = customerApi;