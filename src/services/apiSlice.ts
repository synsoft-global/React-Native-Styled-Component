import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* create api  base */
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.APP_API_URL}/`,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', `application/json`);
      // headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});