import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLoginHandle = createAsyncThunk('userLogin/userLoginHandle', async (data) => {
    const res = await axios.post('/user/login', data);
    return res;
});

const initialState = {
    status: 'idle',
    error: null,
}

const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLoginHandle.pending, (state) => {
            state.status = 'loading';
        }).addCase(userLoginHandle.fulfilled, (state) => {
            state.status = 'loading';
            state.status = 'succeeded';
        }).addCase(userLoginHandle.rejected, (action, state) => {
            state.status = 'loading';
            state.error = action.error.message;
        })
    }

})

export default userLoginSlice.reducer;