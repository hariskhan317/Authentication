import { configureStore } from '@reduxjs/toolkit';
import userSignupSliceReducer from './features/UserSiginSlice'

export const store = configureStore({
    reducer: {
        userSignup: userSignupSliceReducer,
    },
})
