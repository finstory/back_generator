import store, { RootState } from "../redux/store";
import { setReducer } from "../redux/useRedux";
export const useTest = () => {
  const setUser = setReducer("user");

  const getStore = {
    get user() {
      return store.getState().user;
    },
  };

  const myAction = () => {
    const oldCredential = getStore.user.credential;
    console.log(oldCredential);
    setUser({ credential: { ...oldCredential, name: "facundo" } }, "SET_USER");

    // console.log(state);
    // setUser({ name: "facundo" }, "SET_USER");
  };

  return { myAction };
};
