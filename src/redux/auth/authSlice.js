import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authActions'
import { REHYDRATE } from "next-redux-wrapper"



const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
    },
    extraReducers: {
        // login
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload.userInfo
            state.userToken = payload.token
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [REHYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
    },
})

export const { logout } = authSlice.actions

export default authSlice.reducer