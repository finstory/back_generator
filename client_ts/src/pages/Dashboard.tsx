import React from "react";
import { Home } from "../components/dashboard/Home";
import { Testing } from "../components/dashboard/Testing";

const Dashboard = () => {
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
      <Home {...{ id: 2 }} />
      <Testing />
    </div>
  );
};

export default Dashboard;
