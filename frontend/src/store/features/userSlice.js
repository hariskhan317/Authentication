import { createSlice } from '@reduxjs/toolkit';
import { userSignupHandle, userLoginHandle, userAuthHandle, userLogoutHandle, updateUserHandle } from './asyncUserFunction/userAsyncThunk.js';

const initialState = {
    isLogin: false,
    user: null,
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Signup
        builder.addCase(userSignupHandle.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(userSignupHandle.fulfilled, (state) => {
            state.status = 'loading' 
            state.status = 'succeeded';
            state.isLogin = true;
        })
        .addCase(userSignupHandle.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message;
        })
        // Login
        builder.addCase(userLoginHandle.pending, (state) => {
            state.status = 'loading';
        }).addCase(userLoginHandle.fulfilled, (state) => {
            state.status = 'loading';
            state.status = 'succeeded';
            state.isLogin = true;
        }).addCase(userLoginHandle.rejected, (action, state) => {
            state.status = 'failed';
            state.error = action.error?.message;
        })
        // Authentication
        builder.addCase(userAuthHandle.pending, (state) => {
            state.status = "loading";
        }).addCase(userAuthHandle.fulfilled, (state, action) => {
            state.status = "succeeded"; 
            state.user = action.payload;
            state.isLogin = true;
        }).addCase(userAuthHandle.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error?.message;
        })
        // updateUser
        builder.addCase(updateUserHandle.pending, (state) => {
            state.status = "loading";
        }).addCase(updateUserHandle.fulfilled, (state) => {
            state.status = "succeeded";  
        }).addCase(updateUserHandle.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error?.message;
        })
        // Logout
        builder.addCase(userLogoutHandle.pending, (state) => {
            state.status = "loading";
        }).addCase(userLogoutHandle.fulfilled, (state) => {
            state.status = "succeeded";
            state.isLogin = false;
            state.user = null;
        }).addCase(userLogoutHandle.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default userSlice.reducer;