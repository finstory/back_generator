import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { moduleReducers, routeReducers, userReducers } from '.';

export const store = configureStore({
    reducer: {
        module: moduleReducers,
        route: routeReducers,
        user: userReducers,
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;