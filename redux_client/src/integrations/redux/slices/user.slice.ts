import { createSelectors, setSelector } from '@config/redux/utils/create-selector.util';
import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { PayloadAction, Reducer } from '@reduxjs/toolkit';
import { prepareSlice } from '@config/redux/utils/prepare-slice.util';
import { SliceSelector } from '@/_common/config/redux/decorators/slice-selectors';

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

@SliceSelector
@InitializeSlice
class UserSlice extends ReduxSlice<UserSlice> {


    initialState: UserState = {
        list: [],
        users: [{ id: 1, name: 'Alice', userType: 'admin' },
        { id: 2, name: 'Bob', userType: 'user' },],
        filterType: 'admin',
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

    //% Selectors:

    filteredUserSelector = (type: UserState["filterType"] = "user") => {
        return setSelector(

            [this.selector.user.users.get(), this.selector.user.filterType.get()],
            (users, filterType) => {
                console.log(users)
                if (type === 'all') return users;
                return users.filter(user => user.userType === filterType);
            }
        );
    }

}


//% Exports:
const slice = new UserSlice();
const { selector, actions, reducers, allSelectors } = prepareSlice<UserSlice>(slice);

export const userReducers = reducers as Reducer<UserState>;
export const userSelector = selector;
export const userActions = actions;
export const userAllSelectors = allSelectors;
// type SelectorKeys<T> = Pick<T, {
//     [K in keyof T]: K extends `${string}Selector` ? K : never;
// }[keyof T]>;

// //@ts-ignore
// export const filter: SelectorKeys<UserSlice> = slice.allSelector;

// export const filteredUserSelector = (type: UserState["filterType"] = "user") => {
//     return setSelector(
//         [select.users.get(), select.filterType.get()],
//         (users, filterType) => {
//             console.log(users)
//             // if (type === 'all') return users;
//             // return users.filter(user => user.userType === filterType);
//         }
//     );
// }