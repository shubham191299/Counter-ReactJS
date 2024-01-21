import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterValue: 0},
    reducers: {
        increment: (state)=>{
            state.counterValue++;
        },
        decrement: (state)=>{
            state.counterValue--;
        },
        add: (state, action)=>{
            state.counterValue += action.payload;
        },
        sub: (state, action)=>{
            state.counterValue -= action.payload;
        }
    }
})

export default counterSlice;
export const counterActions = counterSlice.actions;