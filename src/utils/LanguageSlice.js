import { createSlice } from "@reduxjs/toolkit";

const Languages =createSlice({
    name:'language',
    initialState:{
        currentLanguage: 'English'
    },
    reducers:{
    addLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        }
    }
});

export const {addLanguage} = Languages.actions;
export default Languages.reducer;