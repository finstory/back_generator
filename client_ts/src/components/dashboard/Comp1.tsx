import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import store from "../../redux/store";



export const Comp1 = () => {

  const dispatch = useDispatch();

  const submitLogout = () => {
    dispatch({ type: "LOGOUT", payload: { auth: { isLogged: false } } });
  }

  useEffect(() => { }, []);


  return (
    <div>
      <button onClick={submitLogout}>
        OTRO
      </button>
    </div>
  );
};
