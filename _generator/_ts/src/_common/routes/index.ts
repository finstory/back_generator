import { Router } from "express";
//IMPORTS
import Package from "@package/_routes/package.routes";

export const routes = Router();

//ROUTES
routes.use("/module", Package);

export default routes;