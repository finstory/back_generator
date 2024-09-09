
import { Route, Routes } from "react-router-dom";
import { RouteRouter } from "@/_structure/route/routes/route.router";
import { MainLayout } from "../layouts/main.layout";

export const MainRouter = () => {
  return (

    <MainLayout>
      <Routes>
        <Route path="/routes/*" element={<RouteRouter />}>
        </Route>
      </Routes>
    </MainLayout>
  );
};
