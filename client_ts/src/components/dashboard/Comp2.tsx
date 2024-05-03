import React, { useEffect } from "react";


export const Comp2 = () => {
  const { state: { is_login } } = S.user;
  console.log("FUERA");
  return <div>C_TWO</div>;
};
