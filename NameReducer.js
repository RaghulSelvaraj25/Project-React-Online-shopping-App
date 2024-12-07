import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        list: [],},
        reducers: {
            addItem: (state,{payload}) => {
                state.list = [...state.list, {...payload, count : 1}];
            },
            removeItems: (state,{payload}) => {
                const index = state.list.findIndex((product)=>product.id === payload.id);
                state.list = [
                    ...state.list.slice(0, index),
                    ...state.list.slice(index + 1)
                ]
            },
            modifyItems: (state,{payload}) => {
                const index = state.list.findIndex((product)=>product.id === payload.id);
                state.list = [
                    ...state.list.slice(0, index),
                    {...state.list[index], count: payload.count},
                    ...state.list.slice(index + 1),
                ]
            },


        },
})
export const {addItem ,removeItems, modifyItems} = cartSlice.actions;
export default cartSlice.reducer;