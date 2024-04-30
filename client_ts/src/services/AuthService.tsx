import { useSelector } from "react-redux";
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

export const initialState: AuthState = {
  user: {
    name: "ale203",
    password: "123",
  },
  name: "FACUNDO",
  token: "",
  isAuthenticated: false,
  loading: true,
};

const selectorRedux = <T extends keyof AuthState>(key: T): AuthState[T] => {
  for (const initialKey in initialState) {
    if (initialKey === key) {
      const state = useSelector(({ auth }: RootState) => auth[key]);
      return state as AuthState[T];
    }
  }
};

export const mySelection: AuthState = Object.keys(initialState).reduce(
  (selection, key) => {
    Object.defineProperty(selection, key, {
      get() {
        return selectorRedux(key as keyof AuthState);
      },
    });
    return selection;
  },
  {} as AuthState
);
