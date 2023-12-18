import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../interface/products';

const initialState: IProductsState = {
  isProductsPending:false
};

const productSlicer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Array<IProduct>>) => {
      state.products = payload;
    },
    setSelectedProductId: (state, { payload }: PayloadAction<number>) => {
      state.selectedProductId = payload;
    },
    setCarts: (state, { payload }: PayloadAction<Array<number>>) => {
      state.cart = payload;
    },
    setIsGetProductsPending: (state, { payload }: PayloadAction<boolean>) => {
      state.isProductsPending = payload;
    },
    
  },
});

export const { setProducts,setSelectedProductId,setCarts,setIsGetProductsPending} = productSlicer.actions;
export default productSlicer.reducer;
