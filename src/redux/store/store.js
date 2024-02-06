import { configureStore } from "@reduxjs/toolkit";
import GoogleLoginReducer from "../reducers/authentication";

const store = configureStore({
    reducer: {
        glogin: GoogleLoginReducer
    }
}) 

export default store;