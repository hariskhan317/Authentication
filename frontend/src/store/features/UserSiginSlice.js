import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import axios from 'axios';

export const userSignup = createAsyncThunk('userSignup/userSignup', async(data) => {
    try {
        console.log(data)
        const res = await axios.post('/user/signup', data);
        console.log({res});
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
        builder.addCase(userSignup.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(userSignup.fulfilled, (state) => {
            state.status = 'loading'
            state.status = 'succeeded';
        })
        .addCase(userSignup.rejected, (state, action) => {
            state.status = 'loading'
            state.error = action.error.message;
        })
    }
})

export default userSignupSlice.reducer;