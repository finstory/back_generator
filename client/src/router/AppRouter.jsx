import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Testing } from "../pages/Testing";
import { TestingLine } from "../pages/TestingLine";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/" element={<Testing />} /> */}
      {/* <Route path="/" element={<TestingLine />} /> */}
    </Routes>
  );
};
