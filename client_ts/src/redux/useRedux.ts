import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { initialState } from "./reducers";

function fistLetterUpperCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const setReducer = (name: string) => {
  const dispatch = useDispatch();
  const setName = "set" + fistLetterUpperCase(name);

  const callback = (data: any, actionName: string) => {
    data = { [name]: data };
    if (actionName) dispatch({ type: actionName, payload: data });
    else dispatch({ type: Object.keys(data)[0], payload: data });
  };

  return callback;
};

export const selectorRedux = <K extends keyof RootState>(
  stateKey: K,
  authKey: keyof RootState[K]
): RootState[K][keyof RootState[K]] => {
  for (const initialKey in initialState[stateKey]) {
    if (initialKey === authKey) {
      const state = useSelector((state: RootState) => state[stateKey][authKey]);
      return state as RootState[K][keyof RootState[K]];
    }
  }
};

export const mySelect = <K extends keyof RootState>(
  stateKey: K
): { [P in keyof RootState[K]]: RootState[K][P] } => {
  const mySelection = Object.keys(initialState[stateKey]).reduce(
    (selection, key) => {
      Object.defineProperty(selection, key, {
        get() {
          return selectorRedux(stateKey, key as keyof RootState[K]);
        },
      });
      return selection;
    },
    {} as { [P in keyof RootState[K]]: RootState[K][P] }
  );

  return mySelection;
};
