import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shoesData: [],
    status: "idle",
    error: null
}

const shoesSlice = createSlice({
    name: "shoes",
    initialState,
    reducers: {
        addShoesData(state, action) {
            action.payload.shoesData.shoes.map(shoesItem => {
                return state.shoesData.push(shoesItem);
            })
        }
    }
})

export default shoesSlice.reducer;

export const { addShoesData } = shoesSlice.actions;