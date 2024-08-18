import { prepareSlice } from '@/_common/config/redux/utils/prepare-slice.util';
import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { PayloadAction, Reducer } from '@reduxjs/toolkit';

interface ModuleState {
    other: number;
    facu: string;
}

@InitializeSlice
class ModuleSlice extends ReduxSlice<ModuleSlice> {

    initialState: ModuleState = {
        other: 0,
        facu: "default",
    };

    // % Actions:

    increment = (state: ModuleState) => {
        // state.value += 2;
    };

    changeName = (state: ModuleState, { payload }: PayloadAction<string>) => {
        state.facu = payload;
    }


}

//% Exports:
const slice = new ModuleSlice().slice;
const { selector, actions, reducers } = prepareSlice<ModuleSlice, "module">(slice);

export const moduleReducers = reducers as Reducer<ModuleState>;
export const moduleSelector = selector;
export const moduleActions = actions;