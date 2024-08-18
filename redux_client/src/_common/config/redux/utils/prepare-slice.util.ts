import { ReduxSlice } from "@/_common/config/redux/decorators/redux-slice";
import { useActions } from "@/_common/config/redux/hooks/blind-actions";
import { createSelector } from "@/_common/config/redux/hooks/redux";
import { type RootState } from "@/integrations/redux/store";
import { PayloadAction } from "@reduxjs/toolkit";

type InferActionInSlice<S> = {
    [K in keyof S as S[K] extends (state: any, action: PayloadAction<any>) => void ? K : never]:
    S[K] extends (state: any, action: PayloadAction<infer P>) => void ? (payload: P) => void :
    S[K] extends (state: any) => void ? () => void : never;
} & {
    [K in keyof S as S[K] extends (state: any) => void ? K : never]: () => void;
};


export const prepareSlice = <T extends ReduxSlice<T>, N extends keyof RootState>(slice: T["slice"]) => {

    const reducers = slice.reducer;
    const selector = createSelector(slice.name as N);
    const actions = (): InferActionInSlice<T> => useActions(slice.actions as any);

    return { reducers, selector, actions };
};