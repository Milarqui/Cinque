import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    lista: []
}

export const friendListSlice = createSlice({
    name:"friends",
    reducers:{
        friendListGet: (state,action)=>{
            let token = sessionStorage.getItem("user-auth")
            state.lista = await axios.get("/api/friends/amigos",{},{header:{"user-auth":token}})
        },
        makeFriends: (state,action)=>{
            let token = sessionStorage.getItem("user-auth")
            let { id, tipo } = action.payload
            await axios.put("/api/friends/solicitar",{ id, tipo },{header:{"user-auth":token}})
        }
    }
})

export const {friendListGet,makeFriends} = friendListSlice.actions
export const getLista = (state) => state.counter.lista
export default friendSlice.reducer