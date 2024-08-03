import { Router } from "express";
//<IMPORTS>
import PackageRoute from "@package/_routes/package.routes";
import EndpointRoute from "@/app/endpoint/_validations/_routes/endpoint.route";
import ValidationRoute from "@validation/_routes/validation.route";

export const routes = Router();

//<ROUTES>
routes.use("/module", PackageRoute);
routes.use("/endpoint", EndpointRoute);
routes.use("/validation", ValidationRoute);
export default routes;