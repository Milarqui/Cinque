import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    token: "",
    user: {}
}

export const loginSlice = createSlice({
    name: "login",
    reducers:{
        loginFunction: (state,action)=>{
            let data = {email:action.payload.email,password:action.payload.password}
            let loginRes = await axios.post("/api/users/login",data)
            state.token = loginRes.data.token
            state.user = loginRes.data.user
            sessionStorage.setItem("user-auth",loginRes.data.token)
        }
    }
})

export const { loginFunction } = loginSlice.actions

export const getUser = (state) => state.counter.user
export const getToken = (state) => state.counter.token

export default loginSlice.reducer