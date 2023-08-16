import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URL = import.meta.env.VITE_API_URL || "/api"

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Orders"]
    }),
    getOrdersInWarning: builder.query({
      query: () => "/orders/in-warning",
    }),
    getOrdersInProgress: builder.query({
      query: (range) => `/orders/in-progress?fromdate=${range.fromdate}&todate=${range.todate}`,
    }),
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder
      })
    }),
    updateOrder: builder.mutation({
      query: (updateOrder) => ({
        url: `/orders/${updateOrder.id}`,
        method: "PUT",
        body: updateOrder
      }),
      invalidatesTags: ["Orders"]
    })
  }),
})

export const { 
  useGetOrdersQuery, 
  useGetOrdersInWarningQuery,
  useGetOrdersInProgressQuery,
  useCreateOrderMutation, 
  useUpdateOrderMutation 
} = orderApi
