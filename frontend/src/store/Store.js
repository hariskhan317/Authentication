import { configureStore } from '@reduxjs/toolkit';
import userSignupSliceReducer from './features/UserSigupSlice';
import userLoginSliceReducer from './features/userLoginSlice';
import userAuthSliceReducer from './features/userAuthSlice';

export const store = configureStore({
    reducer: {
        userSignup: userSignupSliceReducer,
        userLogin: userLoginSliceReducer,
        userAuth: userAuthSliceReducer,
    },
})
