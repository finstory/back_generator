
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './counter/counter.slice'
import { userReducers } from './user/user.slice'

export const store = configureStore({
    reducer: {
        // counter: counterSlice.reducer,
        user: userReducers,
    },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;