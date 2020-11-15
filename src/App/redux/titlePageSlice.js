import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = []

const titlePageSlice = createSlice({
    name: "titlePageItems",
    initialState,
    reducers: {
        setTitlePageItems(state, action) {
            action.payload.map(item => {
                state.push(item)
            })
        }
    }
})

export default titlePageSlice.reducer;

export const { setTitlePageItems } = titlePageSlice.actions;