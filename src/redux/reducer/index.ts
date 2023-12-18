import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './products'


const appReducer = combineReducers({
  products: productReducer,
});

export default appReducer;