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
export interface UserState {
  credential: {
    id: number;
    name: string;
    password: string;
  };
  is_login: true;
}

export const userState: UserState = {
  credential: {
    id: 1657,
    name: "facu",
    password: "123",
  },
  is_login: true,
};

let reducers = {
  user: userState,
  auth: authState,
};

export default reducers;
