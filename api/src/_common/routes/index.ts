import { Router } from "express";
//<IMPORTS>
import PackageRoute from "@package/_routes/package.routes";
import EndpointRoute from "@endpoint/_routes/endpoint.route";
import ValidationRoute from "@validation/_routes/validation.route";

export const routes = Router();

//<ROUTES>

//crea una ruta principal de home 

routes.get("/", (req, res) => {
    res.send("Hello World");
});

routes.use("/module", PackageRoute);
routes.use("/endpoint", EndpointRoute);
routes.use("/validation", ValidationRoute);
export default routes;