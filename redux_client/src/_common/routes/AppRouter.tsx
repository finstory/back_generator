
import { Route, Routes } from "react-router-dom";
import { Footer } from "@/app/global/components/Footer/Footer";
import { Header } from "@/app/global/components/Header/Header";
import { RouteRouter } from "@/structure/views/route/route.router";

export const AppRouter = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/routes/*" element={<RouteRouter />}>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
