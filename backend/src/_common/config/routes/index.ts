import { Router } from "express";
//IMPORTS
import User from "@user/_routes/user.routes";

export const routes = Router();

//ROUTES
routes.use("/user", User);

export default routes;