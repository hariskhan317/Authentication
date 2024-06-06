import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import axios from 'axios';

export const userSignupHandle = createAsyncThunk('userSignup/userSignupHandle', async(data) => {
    try { 
        const res = await axios.post('/user/signup', data); 
        return res;
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    status: "idle",
    error: null,
}

const userSignupSlice = createSlice({
    name: 'userSignup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userSignupHandle.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(userSignupHandle.fulfilled, (state) => {
            state.status = 'loading'
            state.status = 'succeeded';
        })
        .addCase(userSignupHandle.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message;
        })
    }
})

export default userSignupSlice.reducer;