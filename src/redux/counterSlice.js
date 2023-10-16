import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1

        },
        reset: (state) => {
            state.count = 0
        },
        incrementmentByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
})

export const { increment, decrement, reset,incrementmentByAmount } = counterSlice.actions
export default counterSlice.reducer