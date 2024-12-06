import { configureStore } from '@reduxjs/toolkit';
import courseSlice from './features/courseSlice';
import cartSlice from './features/cartSlice';
import productSlice from './features/productSlice';
import wishlistSlice from './features/wishlistSlice';
import accountSlice from './features/accountSlice'; 

const store = configureStore({
    reducer: {
        courses: courseSlice,
        products: productSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
        accounts: accountSlice, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
