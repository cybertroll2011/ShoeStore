import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogedIn: false,
    login: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData(state, action) {
            state.isLogedIn = action.payload.isLogedIn;
            state.login = action.payload.login;
        }
    }
})

export default userSlice.reducer;

export const { setUserData } = userSlice.actions;