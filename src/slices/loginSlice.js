import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginPost} from "../api/meberApi";

const initState = {
    email : ''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param,{ rejectWithValue }) => loginPost(param));


const loginSlice = createSlice({
    name : "loginSlice",
    initialState : initState,
    reducers : {
        login : (state,action) => { // state 기존의 상태 , action 은 dispatch 로 넘어온 값
            console.log("login........", action);
            return {email : action.payload.email}
        },
        logout : (state,action) => {
            console.log("logout........",action);
            return {...initState}
        }
    },
    extraReducers : (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state,action) =>{
            console.log("loginPostAsync.fulfilled........");
            return action.payload;

        })
            .addCase(loginPostAsync.rejected, (state,action) => {
                console.log("loginPostAsync.rejected........");
            })
            .addCase(loginPostAsync.pending, (state,action) => {
                console.log("loginPostAsync.pending........");
            })
    }
})




export const {login, logout} = loginSlice.actions; // 외부에서 사용할 수 있도록 export

export default loginSlice.reducer; // reducer 를 export

