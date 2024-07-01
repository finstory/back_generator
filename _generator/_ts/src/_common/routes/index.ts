import { Router } from "express";
//<IMPORTS>
import Package from "@package/_routes/package.routes";
import Endpoint from "@endpoint/_routes/endpoint.route";

export const routes = Router();

//<ROUTES>
routes.use("/module", Package);
routes.use("/endpoint", Endpoint);

export default routes;