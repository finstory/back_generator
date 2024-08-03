import { ActionCreatorsMapObject, bindActionCreators, PayloadAction } from '@reduxjs/toolkit';
import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { createTypedSelector } from '@/_common/config/redux/hooks/redux';
import { useDispatch } from 'react-redux';

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

    ["testName/comp"] = (state: UserState, { payload }: PayloadAction<string>) => {
        state.children.name = payload;
    }

}

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};


//% Exports:
const userSlice = new UserSlice().slice;
export const userReducers = userSlice.reducer;
export const userSelector = createTypedSelector("user");
export const userActions = () => useActions(userSlice.actions);