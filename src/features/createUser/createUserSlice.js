import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    token: "",
    user: {}
}

export const newUserSlice = createSlice({
    name: "createUser",
    reducers:{
        createUserFunction: (state,action)=>{
            let data = { nombre, apellido, telefono, email, nacimiento, password1, password2} = action.payload
            await axios.put("/api/users/newUser",data)
        }
    }
})

export const { createUserFunction } = newUserSlice.actions

export default newUserSlice.reducer