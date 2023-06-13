import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://127.0.0.1:8000'
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
            const { data } = await axios.post(
                `${backendURL}/api/login/`,
                { username, password },
                config
            )
            
            if (data.token) {
                localStorage.setItem('userToken', data.token)
    
                const { data: userInfo} = await axios.get(
                    `${backendURL}/users/${data.user_id}/`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `Token ${data.token}`,
                        },
                    }
                )

                if (userInfo) {
                    return { "token": data.token, "userInfo": userInfo}
                }

            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)