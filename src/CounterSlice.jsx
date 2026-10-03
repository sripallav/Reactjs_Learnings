import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",

    initialState: 0,

    reducers: {
        increment: (state) => {
            return state + 1;
        },

        decrement: (state) => {
            return state - 1;
        },

        incrementBy: (state, action) => {
            return state + action.payload;
        },

        decrementBy: (state, action) => {
            return state - action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementBy,
    decrementBy
} = counterSlice.actions;

export default counterSlice.reducer;