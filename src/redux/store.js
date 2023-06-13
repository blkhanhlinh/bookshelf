import { configureStore, combineReducers, ThunkAction } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { createWrapper } from "next-redux-wrapper"
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const makeStore = () => configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistedStore = () => persistStore(makeStore())

export const wrapper = createWrapper(makeStore)