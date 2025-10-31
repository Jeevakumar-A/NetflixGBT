import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';


export const Appstore = configureStore({
    reducer: {
        user: userReducer,
    }
});