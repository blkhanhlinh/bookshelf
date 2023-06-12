import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { createWrapper } from "next-redux-wrapper";


const store = configureStore({
    reducer: {
        auth: authReducer
    }
})
export default store

export const wrapper = createWrapper(store)