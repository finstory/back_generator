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

export default setModularClass(new CounterIntAction(), "int/");