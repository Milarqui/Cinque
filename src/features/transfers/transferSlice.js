import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    user: {}
}

export const transferSlice = createSlice({
    name: "transfer",
    reducers:{
        transferFunction: (state,action)=>{
            state.user = await axios.put("/api/transfers/transferir",action.payload)
        }
    }
})

export const { transferFunction } = transferSlice.actions
export const getUser = (state) => state.counter.user

export default transferSlice.reducer