import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        return {
          method: "GET",
          url: `/products?searchTerm=${query?.searchTerm}&sort=${query?.sort}`,
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = baseApi;