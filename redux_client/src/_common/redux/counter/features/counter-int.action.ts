import { CounterState } from "../counter.slice";
import { BaseAction } from "../../_interfaces/redux.interface";
import { setModularClass } from "../../_utils/modular-architecture.util";

export class CounterIntAction {

    test = (state: CounterState) => {
        state.value += 1;
    };

    incrementInteger = (state: CounterState) => {
        state.value += 1;
    };
}

type Action<Payload = any> = BaseAction<CounterState, Payload>;

type RenameUserProperties<T> = {
    [K in keyof T as `int_${Extract<K, string>}`]: T[K];
};

const counter = new CounterIntAction();
type RenamedCounterIntAction = RenameUserProperties<typeof counter>;

export default setModularClass(counter, "int_") as unknown as RenamedCounterIntAction;

// export default setModularClass(new CounterIntAction(), "int/");