import express, { Router } from "express";
import path from "path";
//<IMPORTS>
import PackageRoute from "@package/_routes/package.routes";
import EndpointRoute from "@endpoint/_routes/endpoint.route";
import ValidationRoute from "@validation/_routes/validation.route";

export const routes = Router();

routes.use(express.static(path.join(__dirname, 'public')));
//<ROUTES>

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

routes.use("/module", PackageRoute);
routes.use("/endpoint", EndpointRoute);
routes.use("/validation", ValidationRoute);
export default routes;