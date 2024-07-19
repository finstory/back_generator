import { Route, Routes } from "react-router-dom";
import { RoutesPage } from './../pages/RoutesPage';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/routes" element={<RoutesPage />} />
    </Routes>
  );
};
