import { RootState, store } from "@/integrations/redux/store";


export function objectGetState(): RootState {
    const selection: any = {};

    const state: RootState = store.getState();

    Object.keys(state).forEach(key => {
        Object.defineProperty(selection, key, {
            get() {
                return store.getState()[key];
            },
            enumerable: true,
            configurable: true
        });
    });

    return selection;
}