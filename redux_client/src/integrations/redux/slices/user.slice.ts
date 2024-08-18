import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { PayloadAction, Reducer } from '@reduxjs/toolkit';
import { prepareSlice } from '@/_common/config/redux/utils/prepare-slice.util';

export interface UserState {
    value: number;
    name?: string;
    children: {
        name: string;
        age: number;
    }
}

@InitializeSlice
class UserSlice extends ReduxSlice<UserSlice> {

    initialState: UserState = {
        value: 0,
        name: "default",
        children: {
            name: "default",
            age: 0
        }
    };

    // % Actions:

    increment = (state: UserState) => {
        state.value += 2;
    };

    changeName = (state: UserState, { payload }: PayloadAction<string>) => {
        state.name = payload;
    }

    changeChildrenName = (state: UserState, { payload }: PayloadAction<string>) => {
        state.children.name = payload;
    }

}


//% Exports:
const slice = new UserSlice().slice;
const { selector, actions, reducers } = prepareSlice<UserSlice, "user">(slice);

export const userReducers = reducers as Reducer<UserState>;
export const userSelector = selector;
export const userActions = actions;