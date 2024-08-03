import { useDispatch, useSelector as useRootSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/_common/redux/store'
import { ReactNode } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useSelector = useRootSelector.withTypes<RootState>()

// Función que crea un selector personalizado para cualquier porción del estado
export const createTypedSelector = <StateKey extends keyof RootState>(key: StateKey) => {
    return <TSelected>(selector: (subState: RootState[StateKey]) => TSelected): TSelected => {
        return useSelector((state: RootState) => selector(state[key]));
    };
};

// Función que crea selectores personalizados para propiedades anidadas
export const createNestedTypedSelector = <StateKey extends keyof RootState, SubStateKey extends keyof RootState[StateKey]>(
    key: StateKey,
    ...subKeys: SubStateKey[]
) => {
    return <TSelected>(selector: (subState: any) => TSelected): TSelected => {
        return useSelector((state: RootState) => {
            let nestedState: any = state[key];
            for (const subKey of subKeys) {
                nestedState = nestedState[subKey];
            }
            return selector(nestedState);
        });
    };
};
