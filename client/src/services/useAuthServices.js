//! NO SE USA O SE USARÁ LUEGO...

import React from "react";
import axios from "axios";
import { useRedux } from "../redux/reducer/useRedux";

export const authReducer = {
  user: {
    name: "ale203",
    password: "123",
  },
  error_login: false,
  logged: false,
};

//localStorage : logged: true
export const useAuthServices = () => {
  const { auth, setAuth } = { ...useRedux("auth") };
  const services = { auth, setAuth };

  services.loadLogin = (name, password) => {
    if (name === auth.user.name && password === auth.user.password) {
      setAuth(
        { logged: true, error_login: false, user: { name: name, password: password } },
        "LOGIN_USER"
      );
      localStorage.setItem("logged", true);

    }
    if (name !== auth.user.name || password !== auth.user.password) {
      setAuth(
        { error_login: true, logged: false },
        "LOGGIN_ERROR"
      );
    }
  };


  services.checkLogin = () => {
    if (localStorage.getItem("logged") === "true") {
      setAuth({ logged: true }, "CHECK_LOGIN")
    }
  }


  services.logout = () => {
    const { name, password } = auth.user;

    localStorage.setItem("logged", false);
    setAuth(
      { logged: false, user: { name: name, password: password } },
      "LOGOUT"
    );

  };


  return services;
};
