import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Comp1 } from "../components/dashboard/Comp1";
import useUserServices from "../services/useUserServices";

// import useUserServices from "../services/useUserServices";

const Dashboard = () => {
  const { changeName } = useUserServices();

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

      >ACTION</button>
      {/* <Comp1 /> */}
      {/* <Comp1 />
      <Comp2 /> */}
    </div>
  );
};

export default Dashboard;
