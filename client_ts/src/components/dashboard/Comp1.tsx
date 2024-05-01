import React, { useEffect } from "react";
import { mySelection, setReducer } from "../../services/useAuthService";

export const Comp1 = () => {
  const obj = mySelection.user;
  const { setAuth } = setReducer("auth");
  const pass = mySelection.user.password;

  useEffect(() => {
    console.log("hubo cambio");
  }, [mySelection.user.password]);

  console.log(obj);
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          setAuth(
            {
              user: {
                name: "facu" + Math.round(Math.random() * 100),
                password: pass,
              },
            },
            "SET_USER"
          );
        }}
      >
        OTRO
      </button>
    </div>
  );
};
