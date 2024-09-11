import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { MainRouter } from "./main.router";

export const AppRouter = () => {
    return (
        <HashRouter>

            <Routes>
                <Route path="/*" element={<MainRouter />} />
            </Routes>

        </HashRouter>
    );
};
