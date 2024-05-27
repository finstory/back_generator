
import { RoutesPage } from "@routes/_pages/RoutesPage";
import { Route, Routes } from "react-router-dom";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/routes" element={<RoutesPage />}>
      </Route>
    </Routes>
  );
};
