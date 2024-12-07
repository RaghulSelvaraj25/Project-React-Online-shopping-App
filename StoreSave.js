import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reduce/NameReducer';
export default configureStore({
    reducer : {
    cart: cartReducer
    },
})