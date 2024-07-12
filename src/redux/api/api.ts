import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Get1", "Get2"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        return {
          method: "GET",
          url: `/products?searchTerm=${query?.searchTerm}&sort=${query?.sort}`,
        };
      },
      providesTags: ["Get1"],
    }),
    getProductsAgain: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/products",
        };
      },
      providesTags: ["Get2"],
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
      invalidatesTags: ["Get1", "Get2"],
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        return {
          url: `/products/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["Get1", "Get2"],
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
    invalidatesTags: ["Get1", "Get2"],
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostOrderMutation,
  useGetProductsAgainQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = baseApi;
