import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { PayloadAction, Reducer } from '@reduxjs/toolkit';
import { prepareSlice } from '@/_common/config/redux/utils/prepare-slice.util';

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

    //% Selectors Specific:



}


//% Exports:
const slice = new UserSlice().slice;
const { selector, actions, reducers } = prepareSlice<UserSlice, "user">(slice);

export const userReducers = reducers as Reducer<UserState>;
export const userSelector = selector;
export const userActions = actions;


import { createSelector } from '@reduxjs/toolkit';
import { RootState, store } from '../store';
import { useSelector } from 'react-redux';

// const selectUsers = (state: RootState) => state.user.users
// const selectFilterType = (state: RootState) => state.user.filterType;


const filterSelector = (users: UserState["users"], filterType: UserState["filterType"]) => {
    if (filterType === 'all') {
        return users;
    }
    return users.filter(user => user.userType === filterType);
}

const newSelector = <S, R>(selectors: Array<(state: S) => any>, callBack: (...args: any[]) => R) => {
    return createSelector(selectors, (...results) => callBack(...results));
}

type Selectors = Array<(state: RootState) => any>


const initialState: UserState = {
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


// const selectors = {
//     get user() {
//         return {
//             get users() {
//                 return (state: RootState) => state.user.users;
//             },
//             get filterType() {
//                 return (state: RootState) => state.user.filterType;
//             },
//             get value() {
//                 return (state: RootState) => state.user.value;
//             },
//             get name() {
//                 return (state: RootState) => state.user.name;
//             },
//             get children() {
//                 return {
//                     get name() {
//                         return (state: RootState) => state.user.children.name;
//                     },
//                     get age() {
//                         return (state: RootState) => state.user.children.age;
//                     }
//                 }
//             }
//         };
//     }
// }

type Selector<T> = (state: RootState) => T;

// Recursive type to build selector object types
type BuildSelectors<T> = {
    [K in keyof T]: T[K] extends object
    ? BuildSelectors<T[K]> & { get(): Selector<T[K]> }
    : { get(): Selector<T[K]> };
};

// Adjusted createSelectors function
const createSelectors = <T extends RootState>(structure: T, path: string[] = []): BuildSelectors<T> => {
    return Object.keys(structure).reduce((acc, key) => {
        const currentPath = [...path, key];
        if (Array.isArray(structure[key])) {
            acc[key] = {
                get: () => (state: RootState) => currentPath.reduce((subState, part) => subState[part], state) as any
            }
        } else {
            acc[key] = {
                get: () => (state: RootState) => currentPath.reduce((subState, part) => subState[part], state) as any,
                ...(typeof structure[key] === "object" && structure[key] !== null ? createSelectors(structure[key], currentPath) as any : {})
                // ...(typeof state[key] === "object" && state[key] !== null
                //     ? createUpdateState(state[key], sharedSubject, [...path, key])
                //     : {}),
            };
        }
        return acc;
    }, {} as BuildSelectors<T>);
};




const setSelector = <S extends Selector<any>[], R>(
    selectors: [...S],
    combinerFn: (...args: { [K in keyof S]: ReturnType<S[K]> }) => R
) => {
    const memoizedSelector = createSelector(
        selectors,
        (...args: { [K in keyof S]: ReturnType<S[K]> }) => combinerFn(...args)
    );

    return useSelector(memoizedSelector as any) as R;
};

const selectors = createSelectors<RootState>({ user: initialState } as RootState);
const select = selectors.user;



export const userFilteredSelector = (type: string) => {

    return setSelector(

        [select.users.get(), select.filterType.get(), select.children.get()],
        (users, filterType, c) => {
            console.log(c)
            if (type === 'all') return users;
            return users.filter(user => user.userType === filterType);
        }
    );
}

const selectFilteredUsers = createSelector(
    [select.users.get(), select.filterType.get()],
    (users, filterType) => {

        if (filterType === 'all') return users;
        return users.filter(user => user.userType === filterType);
    }
);
