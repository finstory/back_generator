import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export interface AuthState {
  user: {
    name: string;
    password: string;
  };
  name: string;
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
}

export const authState: AuthState = {
  user: {
    name: "facu",
    password: "123",
  },
  name: "FACUNDO",
  token: "",
  isAuthenticated: false,
  loading: true,
};

function fistLetterUpperCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// export const setReducer = (name: string) => {
//   const dispatch = useDispatch();
//   const setName = "set" + fistLetterUpperCase(name);
//   return {
//     [setName]: (data: any, actionName: string) => {
//       data = { [name]: data };
//       if (actionName) dispatch({ type: actionName, payload: data });
//       else dispatch({ type: Object.keys(data)[0], payload: data });
//     },
//   };
// };
export const selectorRedux = <K extends keyof RootState>(
  stateKey: K,
  authKey: keyof RootState[K]
): RootState[K][keyof RootState[K]] => {
  for (const initialKey in authState) {
    if (initialKey === authKey) {
      const state = useSelector((state: RootState) => state[stateKey][authKey]);
      return state as RootState[K][keyof RootState[K]];
    }
  }
};

// Ejemplo de uso:

// Ejemplo de uso

// export const mySelection: AuthState = Object.keys(authState).reduce(
//   (selection, key) => {
//     Object.defineProperty(selection, key, {
//       get() {
//         return selectorRedux(key as keyof AuthState, "auth");
//       },
//     });
//     return selection;
//   },
//   {} as AuthState
// );

// const selectorRedux = <T extends keyof AuthState>(key: T): AuthState[T] => {
//   for (const initialKey in authState) {
//     if (initialKey === key) {
//       const state = useSelector(({ auth }: RootState) => auth[key]);
//       return state as AuthState[T];
//     }
//   }
// };

// export const mySelection: AuthState = Object.keys(authState).reduce(
//   (selection, key) => {
//     Object.defineProperty(selection, key, {
//       get() {
//         return selectorRedux(key as keyof AuthState);
//       },
//     });
//     return selection;
//   },
//   {} as AuthState
// );
