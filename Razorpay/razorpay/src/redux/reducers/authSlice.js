import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    token: localStorage.getItem('token'),
    name: "",
    email: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false
}
export const registerUser = createAsyncThunk(
    'auth/registerUser', async (values, { rejectWithvalue }) => {
        try {
            const token = await axios.post("http://localhost:5000/api/register", {
                name: values.name,
                email: values.email, password: values.password
            })
            localStorage.setItem('token', token.data)
            return token.data
        }
        catch (err) {
            console.log(err)
            return rejectWithvalue(err.response.data)


        }
    }
)
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(registerStatus.pending, (state, action) => {
            return { ...state, registerStatus: 'pending' }
        })
        builder.addCase(registerStatus.fulfilled, (state, action) => {
            if (action.payload) {

            } else {
                return state
            }
        });
        builder.addCase(registerUserStatus.reject,(state,action)=>{
            
        })
    }
})
export default authSlice.reducer