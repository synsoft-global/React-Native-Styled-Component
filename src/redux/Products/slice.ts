import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    productsData: {},
    errorMessage: '',
  };

const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.productsData = action.payload;
      },
    },
})
    
export const {setProducts} = ProductsSlice.actions;
export default ProductsSlice.reducer;
  