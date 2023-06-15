import { configureStore, combineReducers, ThunkAction } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { cartReducer } from "./cart.slice"
import { createWrapper } from "next-redux-wrapper"
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { bookReducer } from './books.slice'

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    books: bookReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart']
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