import { Router } from "express";
import routesData from "../../data/routesData";
import controller from "../controllers/userControllers";
import { wrapperError } from "../helpers/managerController";
//$ Import Models of Routes.

export const routes = Router();

routesData.forEach((routeData) => {
  routeData.routesList.forEach((route) => {
    routes[route.method](
      `/${routeData.module}${route.endpoint}`,
      wrapperError(controller.userGet)
    );
  });
});