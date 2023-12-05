import {configureStore} from '@reduxjs/toolkit';
import productReducer from './Products/slice';
import { apiSlice } from '../services/apiSlice';

export const Store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        product: productReducer
    },
    middleware: (getDefaultMiddleware) => {
      return [
        ...getDefaultMiddleware()
        .concat(apiSlice.middleware)
      ]
    },
})