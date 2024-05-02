import React, { useEffect } from "react";
import S from "../../services/injector";


export const Comp2 = () => {
  const { state: { is_login } } = S.user;
  console.log("FUERA");
  return <div>C_TWO</div>;
};
