import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: 'toggle',
    initialState: false,
    reducers: {
        handleToggle: (state)=>{
            return !state;
        }
    }
})

export const privacyActions = privacySlice.actions;
export default privacySlice;