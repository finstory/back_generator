import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainRouter } from "./main.router";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MainRouter />} />
            </Routes>
        </BrowserRouter>
    );
};
