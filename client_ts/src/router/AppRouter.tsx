import { Route, Routes } from "react-router-dom";
import { RoutesPage } from "../pages/Routes.page";
import { TestPage } from "../pages/Test.page";


export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<RoutesPage />} /> */}
      <Route path="/" element={<TestPage />} />
    </Routes>
  );
};
