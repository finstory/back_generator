import { prepareSlice } from '@/_common/config/redux/utils/prepare-slice.util';
import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
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

    ["testName/comp"] = (state: UserState, { payload }: PayloadAction<string>) => {
        state.children.name = payload;
    }

}

// //% Exports:
const userSlice = new UserSlice()
export const userReducers = userSlice.slice.reducer;
export const userSelector = prepareSlice(userSlice).selector;
export const userActions = prepareSlice(userSlice).actions;