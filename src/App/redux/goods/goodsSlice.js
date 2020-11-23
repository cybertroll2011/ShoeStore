import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allGoodsData: [],
    loadingStatus: 'idle',
    error: null
};

const goodsSlice = createSlice({
    name: "allGoods",
    initialState,
    reducers: {
        addGoodsData(state, action) {
            const objKeys = Object.keys(action.payload);
            objKeys.map(key => {
                action.payload[key].map(item => {
                    return state.allGoodsData.push(item);
                });
            })
        },
        setLoadingStatus(state, action) {
            state.loadingStatus = action.payload;
        }
    }
})

export default goodsSlice.reducer;

export const { addGoodsData } = goodsSlice.actions;
export const { setLoadingStatus } = goodsSlice.actions;