import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shoesData: [],
    status: "idle",
    error: null
}
// status: 'idle' | 'loading' | 'succeeded' | 'failed',

const shoesSlice = createSlice({
    name: "shoes",
    initialState,
    reducers: {
        addShoesData(state, action) {
            action.payload.shoesData.shoes.map(shoesItem => {
                return state.shoesData.push(shoesItem);
            })
        },
        setLoadingStatus(state, action){
            state.status = action.payload;
        }
    }
})

export default shoesSlice.reducer;

export const { addShoesData } = shoesSlice.actions;
export const {setLoadingStatus} = shoesSlice.actions;