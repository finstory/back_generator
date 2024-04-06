import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";
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
