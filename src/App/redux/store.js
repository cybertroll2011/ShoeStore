import { configureStore } from '@reduxjs/toolkit';

import titlePageReducer from './titlePageSlice';
import colorThemeReducer from './colorThemeSlice';

import goodsReducer from './goods/goodsSlice';
import shoesReducer from './goods/shoesSlice';
import tshirtsReducer from './goods/tshirtsSlice';
import hoodiesReducer from './goods/hoodiesSlice';
import pantsReducer from './goods/pantsSlice';

import userReducer from './user/userSlice';

import cartReducer from './cart/cartSlice';

export default configureStore({
    reducer: {
        titlePageItems: titlePageReducer,
        colorTheme: colorThemeReducer,
        allGoods: goodsReducer,
        shoes: shoesReducer,
        tshirts: tshirtsReducer,
        hoodies: hoodiesReducer,
        pants: pantsReducer,
        user: userReducer,
        cart: cartReducer
    }
});