import React, { useEffect } from "react";
import { mySelect } from "../../redux/useRedux";

export const Comp2 = () => {
  const mySelection = mySelect("auth");
  useEffect(() => {
    console.log("EFECTO");
  }, [mySelection.user.password]);

    console.log("FUERA");
  return <div>C_TWO</div>;
};
