import { configureStore } from '@reduxjs/toolkit';

import shoesReducer from './goods/shoesSlice';
import colorThemeReducer from './colorThemeSlice';

export default configureStore({
    reducer: {
        shoes: shoesReducer,
        colorTheme: colorThemeReducer
    }
});