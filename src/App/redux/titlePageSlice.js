import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    titlePageItems: [],
    loadingStatus: 'idle',
    error: null
}

const titlePageSlice = createSlice({
    name: "titlePageItems",
    initialState,
    reducers: {
        setTitlePageItems(state, action) {
            action.payload.map(item => {
                return state.titlePageItems.push(item)
            })
        },
        setLoadingStatus(state, action) {
            state.loadingStatus = action.payload;
        }
    }
})

export default titlePageSlice.reducer;

export const { setTitlePageItems } = titlePageSlice.actions;
export const { setLoadingStatus } = titlePageSlice.actions;