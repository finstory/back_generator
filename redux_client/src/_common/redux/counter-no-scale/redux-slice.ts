import { createSlice, Draft, Slice, SliceCaseReducers } from "@reduxjs/toolkit";

interface MySlice<S, A extends SliceCaseReducers<Draft<S>>> extends Slice<Draft<S>, A> { }

type AllActions<DS> = Omit<DS, 'slice' | "initialState">;
type MyCustomSlice<I, DS> = MySlice<I, SliceCaseReducers<Draft<I>> & AllActions<DS>>;

type InferInitialState<T> = T extends { initialState: infer I } ? I : never;


function removeSliceWord(str: string): string {
    const removed = str.replace("Slice", "");
    return removed.charAt(0).toLowerCase() + removed.slice(1);
}

export class ReduxSlice<S> {
    public slice!: MyCustomSlice<InferInitialState<S>, S>;

    protected initialize(derivedInstance: any, className: string) {
        const nameSlice = removeSliceWord(className);
        const actionList: string[] = Object.getOwnPropertyNames(derivedInstance).filter((prop) => typeof derivedInstance[prop] === 'function');

        const prepareActions = actionList.reduce((acc, action) => {
            return { ...acc, [action]: derivedInstance[action] }
        }, {});

        //@ts-ignore
        this.slice = createSlice({
            name: nameSlice,
            //@ts-ignore
            initialState: this.initialState,
            reducers: { ...prepareActions }
        })
    }

}

export function InitializeSlice<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            //@ts-ignore
            this.initialize(this, constructor.name);
        }
    };
}