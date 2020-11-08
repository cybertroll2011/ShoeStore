import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    colorTheme: 'white'
}

const colorThemeSlice = createSlice({
    name: "currentTheme",
    initialState,
    reducers: {
        changeColorTheme(state, action){
            state.colorTheme = action.payload.colorTheme;
        }
    }
})

export default colorThemeSlice.reducer;

export const { changeColorTheme } = colorThemeSlice.actions;