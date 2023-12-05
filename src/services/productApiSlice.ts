// Importing the apiSlice from the external module
import { apiSlice } from "./apiSlice";

// Creating a product-specific apiSlice by injecting endpoints
export const productApiSlice = apiSlice.injectEndpoints({
  // Defining the endpoints using the builder
  endpoints: (builder) => ({
    // Defining an endpoint for querying all items
    getAllItems: builder.query({
      query: (params) => ({
        // Constructing the URL with skip and limit parameters
        url: `products?skip=${params?.skip}&limit=${params?.limit}`,
      }),
    }),
    
  }),
});

// Extracting specific queries and mutations from the productApiSlice
export const {
  // Extracting the useGetAllItemsQuery hook for querying all items
  useGetAllItemsQuery,
} = productApiSlice;
