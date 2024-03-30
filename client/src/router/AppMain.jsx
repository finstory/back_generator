import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Header } from "../components/Global/Header/Header";
import { SlideMenu } from "../components/Global/SlideMenu/SlideMenu";
import { Auth } from "../pages/Auth";
import { useState } from "react";
import { useAuthServices } from "../services/useAuthServices";

export const AppMain = () => {
  const {
    auth: { logged },
  } = useAuthServices();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
