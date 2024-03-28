import { Router } from "express";

//$ Import Models of Routes.
import { controllers } from "./controllers";

export const routes = Router();

routes.get("/users", controllers.userGet);
