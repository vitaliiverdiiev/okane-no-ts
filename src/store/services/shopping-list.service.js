import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const shoppingListAPI = createApi({
  reducerPath: 'shoppingListAPI',
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.PUBLIC_URL,
    baseUrl: 'http://localhost:9998',
  }),
  tagTypes: ['ShoppingList'],
  endpoints: (build) => ({
    fetchShoppingList: build.query({
      query: () => ({
        url: '/shoppingList',
      }),
      providesTags: (result) => ['ShoppingList'],
    }),
    createShoppingListItem: build.mutation({
      query: (todo) => ({
        url: '/shoppingList',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['ShoppingList'],
    }),
    updateShoppingListItem: build.mutation({
      query: (todo) => ({
        url: `/shoppingList/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['ShoppingList'],
    }),
    deleteShoppingListItem: build.mutation({
      query: (todo) => ({
        url: `/shoppingList/${todo.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ShoppingList'],
    }),
  }),
});
