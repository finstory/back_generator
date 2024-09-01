import { prepareSlice } from '@/_common/config/redux/utils/prepare-slice.util';
import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { PayloadAction, Reducer } from '@reduxjs/toolkit';

interface RouteState {
    value: number;
    name?: string;
    children: {
        name: string;
        age: number;
    }
}

@InitializeSlice
class RouteSlice extends ReduxSlice<RouteSlice> {

    initialState: RouteState = {
        value: 0,
        name: "default",
        children: {
            name: "default",
            age: 0
        }
    };

    // % Actions:

    routeInc = (state: RouteState) => {
        state.value += 2;
    };

    changeName = (state: RouteState, { payload }: PayloadAction<string>) => {
        state.name = payload;
    }

    changeChildrenName = (state: RouteState, { payload }: PayloadAction<string>) => {
        state.children.name = payload;
    }

    ["testName/comp"] = (state: RouteState, { payload }: PayloadAction<string>) => {
        state.children.name = payload;
    }

}

//% Exports:
const slice = new RouteSlice();
const { selector, actions, reducers } = prepareSlice<RouteSlice, "route">(slice);

export const routeReducers = reducers as Reducer<RouteState>;
export const routeSelector = selector;
export const routeActions = actions;