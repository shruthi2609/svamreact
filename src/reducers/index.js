import { createSlice } from "@reduxjs/toolkit";
const initialValue={username:"",role:""}
const userSlice=createSlice({
    name:"userSlice",
    initialState:{value:initialValue},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state)=>{
            state.value=initialValue
        }
    }
})

export default userSlice.reducer
export const {login,logout}=userSlice.actions

