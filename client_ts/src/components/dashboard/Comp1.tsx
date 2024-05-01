import React, { useEffect } from "react";
import { mySelect, setReducer } from "../../redux/useRedux";

export const Comp1 = () => {
  const setAuth = setReducer("auth");
  const mySelection = mySelect("auth");
  const password = mySelection.user.password;
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          setAuth(
            {
              user: {
                name: "facu" + Math.round(Math.random() * 100),
                password,
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
