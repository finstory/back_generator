
import { Route, Routes, HashRouter } from "react-router-dom";
import { RouteRouter } from "@/_structure/route/routes/route.router";
import { MainLayout } from "../layouts/main.layout";
import { RoutePage } from "@/_structure/route/views/route.page";

export const MainRouter = () => {
  return (
    <MainLayout>

      <Routes>
        <Route path="/routes" element={<RoutePage />} />
      </Routes>

    </MainLayout>
  );
};
