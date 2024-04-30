import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  AuthState,
  initialState,
  setUser,
} from "../redux/slices/auth/auth.silce";

const Dashboard = () => {
  // const user = useSelector(({ auth }: RootState) => auth.user);

  const selectorRedux = <T extends keyof AuthState>(key: T): AuthState[T] => {
    for (const initialKey in initialState) {
      if (initialKey === key) {
        const state = useSelector(({ auth }: RootState) => auth[key]);
        return state as AuthState[T];
      }
    }
  };
  const user= selectorRedux("user");
  console.log(user);
  // const myS = selectorRedux("name");

  console.log("render");
  const dispatch = useDispatch();
  useEffect(() => {
    // setUser: (state, action) => {
    //   state.name = action.payload;
    // },

    setInterval(() => {
      dispatch(setUser("FACU" + Math.round(Math.random() * 1000)));
    }, 1000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem",
        color: "white",
      }}
    >
      <button onClick={() => {}}>FACU</button>
      <button onClick={() => {}}>OTRO</button>
      {/* {myS} */}
      {/* <Home {...{ id: 2 }} />
      <Testing /> */}
    </div>
  );
};

export default Dashboard;
