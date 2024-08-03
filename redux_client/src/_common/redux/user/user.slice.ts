import { PayloadAction } from '@reduxjs/toolkit';
import { InitializeSlice, ReduxSlice } from '../counter-no-scale/redux-slice';

export interface UserState {
    value: number;
    name?: string;
}

@InitializeSlice
class UserSlice extends ReduxSlice<UserSlice> {

    initialState: UserState = {
        value: 0,
        name: "default"
    };

    // % Actions:
    increment = (state: UserState) => {
        state.value += 2;
    };

    changeName = (state: UserState, { payload }: PayloadAction<string>) => {
        state.name = payload;
    }

}


//% Exports:

const userSlice = new UserSlice().slice;
export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;