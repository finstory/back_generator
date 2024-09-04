import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { prepareSlice, setSelector } from '@config/redux/utils';
import { PayloadAction as PA, Reducer } from '@reduxjs/toolkit';
import { SliceSelector } from '@config/redux/decorators/slice-selectors';
import { IModule } from '@/app/module/_interfaces/module.interface';


export default interface ModuleState {
    name: { test: string };
    modulesList: IModule[];
    loading: boolean;
}
@SliceSelector
@InitializeSlice
class ModuleSlice extends ReduxSlice<ModuleSlice> {

    initialState: ModuleState = {
        name: { test: "module" },
        modulesList: [],
        loading: true,
    };


    // % Actions:

    setModulesList = (state: ModuleState, action: PA<IModule[]>) => {
        state.modulesList = action.payload;
    }

}

//% Exports:
const slice = new ModuleSlice();
const { selector, actions, reducers, allSelectors } = prepareSlice<ModuleSlice, "module">(slice);

export const moduleReducers = reducers as Reducer<ModuleState>;
export const moduleSelector = selector;
export const moduleActions = actions;
export const selectModule = allSelectors;