import { createSlice, Slice } from '@reduxjs/toolkit'
import validateUniqueActions from '../_utils/validate-unique-actions';
import { removeProxySuffix } from '../_utils/proxy-suffix.util';

import sliceCreator from '../_utils/slice-creator.util'
import counterAction from './counter.action'
import counterIntAction from './features/counter-int.action'
import { setActionsToModularClass } from '../_utils/modular-architecture.util';
//% State:
export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

//% Slice Config:
export const counterSlice = createSlice({
    name: "counter", initialState,
    reducers: { ...counterAction, ...counterIntAction },
});

setActionsToModularClass(counterSlice, [counterIntAction, counterAction], ["int_"]);

export default counterSlice.actions;