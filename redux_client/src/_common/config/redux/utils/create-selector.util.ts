import { RootState } from "@/integrations/redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

type Selector<T> = (state: RootState) => T;

// Recursive type to build selector object types
export type BuildSelectors<T> = {
    [K in keyof T]: T[K] extends object
    ? BuildSelectors<T[K]> & { get(): Selector<T[K]> }
    : { get(): Selector<T[K]> };
};

// Adjusted createSelectors function
export const createSelectors = (structure: RootState, path: string[] = []): BuildSelectors<RootState> => {
    return Object.keys(structure).reduce((acc, key) => {
        const currentPath = [...path, key];
        if (Array.isArray(structure[key])) {
            acc[key] = {
                get: () => (state: RootState) => currentPath.reduce((subState, part) => subState[part], state) as any
            }
        } else {
            acc[key] = {
                get: () => (state: RootState) => currentPath.reduce((subState, part) => subState[part], state) as any,
                ...(typeof structure[key] === "object" && structure[key] !== null ? createSelectors(structure[key], currentPath) as any : {})
            };
        }
        return acc;
    }, {} as BuildSelectors<RootState>);
};

export const setSelector = <S extends Selector<any>[], R>(
    selectors: [...S],
    combinerFn: (...args: { [K in keyof S]: ReturnType<S[K]> }) => R
) => {
    const memoizedSelector = createSelector(
        selectors,
        (...args: { [K in keyof S]: ReturnType<S[K]> }) => combinerFn(...args)
    );

    return useSelector(memoizedSelector as any) as R;
};
