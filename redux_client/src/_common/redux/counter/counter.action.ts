import { CounterState } from "./counter.slice";
import { BaseAction } from "../_interfaces/redux.interface";
import { PayloadAction } from "@reduxjs/toolkit";

export class CounterAction {

    increment = (state: CounterState) => {
        state.value += 1;
    };

    decrement: Action = (state) => {
        state.value -= 1;
    };

    incrementByAmount = (state: CounterState, action: PayloadAction<number>) => {
        state.value += action.payload;
    }
}

type Action<Payload = any> = BaseAction<CounterState, Payload>;

export default new CounterAction();