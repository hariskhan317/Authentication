import { createAsyncThunk } from '@reduxjs/toolkit'  
import axios from 'axios'

export const updateUserHandle = createAsyncThunk('user/userUpdateHandle', async(data) => {
    try { 
        const res = await axios.put('/user/updateUser', data); 
        return res;
    } catch (error) {
        console.log(error)
    }
})

export const userSignupHandle = createAsyncThunk('user/userSignupHandle', async(data) => {
    try { 
        const res = await axios.post('/user/signup', data); 
        return res;
    } catch (error) {
        console.log(error)
    }
})

export const userLoginHandle = createAsyncThunk('user/userLoginHandle', async (data) => {
    const res = await axios.post('/user/login', data);
    return res;
});

export const userAuthHandle = createAsyncThunk('user/userAuthHandle', async () => {
    const res = await axios.get('/user/authUser');
    const data = res.data; 
    return data;
})

// Async thunk for user logout
export const userLogoutHandle = createAsyncThunk('user/userLogoutHandle', async () => {
    const res = await axios.post('/user/logout');
    const data = res.data;
    return data;
});