import {createSlice} from "@reduxjs/toolkit";

const initState = {
    email : ''
}


const loginSlice = createSlice({
    name : "loginSlice",
    initialState : initState,
    reducers : {
        login : () => {
            console.log("login........");
        },
        logout : () => {
            console.log("logout........");
        }
    }
})




export const {login, logout} = loginSlice.actions; // 외부에서 사용할 수 있도록 export

export default loginSlice.reducer; // reducer 를 export

