import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userRegister } from './authActions'
import { HYDRATE } from "next-redux-wrapper"

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

        // Sign up
        [userRegister.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userRegister.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [userRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            }
        },
    },
})

export const { logout } = authSlice.actions

export default authSlice.reducer