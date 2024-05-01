import React from "react";
import { mySelection } from "../../services/useAuthService";

export const Comp2 = () => {
  const obj = mySelection;
  const other = obj.user;
  console.log("obj");
  return <div>C_TWO</div>;
};
