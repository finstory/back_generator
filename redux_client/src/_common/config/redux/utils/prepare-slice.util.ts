import { ReduxSlice } from "@/_common/config/redux/decorators/redux-slice";
import { useActions } from "@/_common/config/redux/hooks/blind-actions";
import { RootState } from "@/integrations/redux/store";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "../hooks";

type OmitSelectors<T> = Omit<T, `${string}Selector`>;

type InferActionInSlice<S> = OmitSelectors<{
    [K in keyof S as S[K] extends (state: any, action: PayloadAction<any>) => void ? K : never]:
    S[K] extends (state: any, action: PayloadAction<infer P>) => void ? (payload: P) => void :
    S[K] extends (state: any) => void ? () => void : never;
} & {
    [K in keyof S as S[K] extends (state: any) => void ? K : never]: () => void;
}>;


type SelectorKeys<T> = Pick<T, {
    [K in keyof T]: K extends `${string}Selector` ? K : never;
}[keyof T]>;


export const prepareSlice = <T extends ReduxSlice<T>, N extends keyof RootState>(slice: T) => {
    const sliceGetting = slice.slice;

    const reducers = sliceGetting.reducer;
    const selector = createSelector(sliceGetting.name as N);
    const actions = (): InferActionInSlice<T> => useActions(sliceGetting.actions as any);

    //@ts-ignore
    const allSelectors: SelectorKeys<T> = slice.allSelectors;
    return { reducers, actions, selector, allSelectors };
};