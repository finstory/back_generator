import { Router } from "express";

//$ Import Models of Routes.
import Users from "../routes/userRoutes";

export const routes = Router();

//$ Added to Main Router.
routes.use("/users", Users);
