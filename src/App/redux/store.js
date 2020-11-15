import { configureStore } from '@reduxjs/toolkit';

import titlePageReducer from './titlePageSlice';
import colorThemeReducer from './colorThemeSlice';
import shoesReducer from './goods/shoesSlice';

export default configureStore({
    reducer: {
        titlePageItems: titlePageReducer,
        shoes: shoesReducer,
        colorTheme: colorThemeReducer
    }
});