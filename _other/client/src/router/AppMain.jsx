import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { useAuthServices } from "../services/useAuthServices";
import toast, { Toaster } from "react-hot-toast";
export const AppMain = () => {
  const {
    auth: { logged },
  } = useAuthServices();

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
