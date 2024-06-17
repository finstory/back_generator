import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "../";

export let allStore = store.getState();

export const getFnState = <K extends keyof RootState>(key: K): RootState[K] => store.getState()[key];

export const getObjState: RootState = {} as RootState;

Object.keys(store.getState()).forEach((key) => {
  Object.defineProperty(getObjState, key, {
    get() {
      return store.getState()[key];
    },
  });
});

// export let states: RootState = store.getState();
// export const getState = () => states;

export const setReducer = <K extends keyof RootState>(name: K) => {
  const dispatch = useDispatch();

  const callback = (data: any, actionName: string) => {
    data = { [name]: data };
    if (actionName) dispatch({ type: actionName, payload: data });
    else dispatch({ type: Object.keys(data)[0], payload: data });
    allStore = store.getState();
    // return store.getState()

  };

  return callback;
};

const selectorRedux = <K extends keyof RootState>(
  stateKey: K,
  childrenKey: keyof RootState[K]
) => {
  for (const initialKey in store.getState()) {
    if (initialKey === stateKey) {
      const state = useSelector((state: RootState) => state[stateKey][childrenKey]);
      return state as RootState[K][keyof RootState[K]];
    }
  }
};

export const getState = <K extends keyof RootState>(
  stateKey: K,
): { [P in keyof RootState[K]]: RootState[K][P] } => {
  const mySelection = Object.keys(store.getState()[stateKey]).reduce((selection, key) => {
    Object.defineProperty(selection, key, {
      get() {

        return selectorRedux(stateKey, key as keyof RootState[K]);
      },
    });
    return selection;
  }, {} as { [P in keyof RootState[K]]: RootState[K][P] });

  return mySelection;
};
