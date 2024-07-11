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
    getProductsAgain: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/products",
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
    deleteProduct: builder.mutation({
      query: (productId) => {
        return {
          url: `/products/${productId}`,
          method: "DELETE",
        };
      },
    }),
    postOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/orders",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostOrderMutation,
  useGetProductsAgainQuery,
  useDeleteProductMutation,
} = baseApi;
