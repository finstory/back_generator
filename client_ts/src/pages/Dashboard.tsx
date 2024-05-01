import { useDispatch, useSelector } from "react-redux";

import { AuthState } from "../services/useAuthService";
import { Comp1 } from "../components/dashboard/Comp1";
import { Comp2 } from "../components/dashboard/Comp2";
import { useEffect, useState } from "react";
import { selectorRedux, mySelect } from "../redux/useRedux";

// import { customDispatch, setAuth } from "../redux/slices/auth/auth.silce";

const Dashboard = () => {
  // const mySelection = selectorRedux("auth", "user");

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
      <button
        onClick={() => {
          // dispatch(
          //   setAuth({
          //     name: "other",
          //   })
          // );
        }}
      >
        CAMBIAR NOMBRE
      </button>

      <Comp1 />
      <Comp2 />
    </div>
  );
};

export default Dashboard;
