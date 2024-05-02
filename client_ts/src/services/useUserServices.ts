import store, { RootState } from "../redux/store";
import { setReducer } from "./../redux/useRedux";
import { useSelector } from "react-redux";

// export interface UserState {
//   credential: {
//     id: number;
//     name: string;
//     password: string;
//   };
//   is_login: true;
// }

// export const userState: UserState = {
//   credential: {
//     id: 1657,
//     name: "facu",
//     password: "123",
//   },
//   is_login: true,
// };

// const user = getReducer("user");
const useUserServices = () => {
  const setUser = setReducer("user");

  // const state = useGetReducer("user", userState);
  //  const state = useSelector((state: RootState) => state["user"]["credential"]);

  const getStore = {
    get user() {
      return store.getState().user;
    },
  };

  const changeName = (name: string) => {
     const oldCredential =  getStore.user
    setUser({ credential: {...oldCredential, name: "facu" } }, "CHANGE_NAME");
  };

  // const state2 = useSelector((state: RootState) => state.user);

  // const api = {
  //   changeName: (name: string) => {
  //     const cred = state.credential;
  //     setUser({ credential: { name } }, "CHANGE_NAME");
  //   },

  //   login: (name: string, password: string) => {
  //     setUser({ is_login: true }, "LOGIN");
  //   },
  //   logout: () => {
  //     setUser({ is_login: false }, "LOGOUT");
  //   },
  // };

  return { changeName };
};

export default useUserServices;
