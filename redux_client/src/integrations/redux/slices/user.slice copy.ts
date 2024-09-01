import { createSelectors, setSelector } from '@config/redux/utils/create-selector.util';
import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { PayloadAction, Reducer } from '@reduxjs/toolkit';
import { prepareSlice } from '@config/redux/utils/prepare-slice.util';

interface User {
    id: number;
    name: string;
    userType: 'admin' | 'user' | 'guest';
}

export interface UserState {
    list: Array<{}>;
    users: Array<User>;
    filterType: 'admin' | 'user' | 'guest' | 'all';
    value: number;
    name?: string;
    children: {
        name: string;
        age: number;
    }
}

@InitializeSlice
class UserSlice {




    otherMethod: () => {}
    filteredUserSelector = (type: UserState["filterType"] = "user") => {

    }
    otherSelector = () => { }


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

    //% Selectors Specific:



}


//% Exports:
const slice = new UserSlice();
export const silce = slice.__allSelector;