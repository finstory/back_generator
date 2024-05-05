import { useEffect, useState } from "react";
import { Comp1 } from "../components/dashboard/Comp1";
import S from "../config/services";


const Dashboard = () => {
  // const authApi = S.auth.api;
  // const { testReducer } = authApiServices();
  // const { store: { name }, api: { testReducer } } = S.auth;

  useEffect(() => {
    // testReducer("facunsd");
  }, []);

  // console.log(name);

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
      <button> ACTION </button>
      {/* <Comp1 /> */}
      {/* <Comp1 />
      <Comp2 /> */}
    </div>
  );
};

export default Dashboard;
