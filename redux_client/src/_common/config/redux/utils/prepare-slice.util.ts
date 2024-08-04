import { ReduxSlice } from "@/_common/config/redux/decorators/redux-slice";
import { useActions } from "@/_common/config/redux/hooks/blind-actions";
import { createSelector } from "@/_common/config/redux/hooks/redux";
import { RootState } from "@/_common/redux/store";


export const prepareSlice = <T extends ReduxSlice<T>>(slice: T) => {
    const sliceName = slice.slice.name as keyof RootState;
    const selector = createSelector(sliceName);
    const actions = () => useActions(slice.slice.actions);

    return { slice, selector, actions };
};