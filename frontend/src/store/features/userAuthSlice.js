import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'  
import axios from 'axios'

export const userAuthHandle = createAsyncThunk('userAuth/userAuthHandle', async() => {
    const res = await axios.get('/user/authUser');
    const data = res.data;
    console.log({ data });
    return data;
})

const initialState = {
    user: null,
    status: 'idle',
    error: null
}

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userAuthHandle.pending, (state) => {
            state.status = "pending";
        }).addCase(userAuthHandle.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
        }).addCase(userAuthHandle.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default userAuthSlice.reducer;