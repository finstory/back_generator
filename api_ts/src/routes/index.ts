import { Router } from "express";
import routesData from "../../auto/data/routesData";
import controller from "../controllers/userControllers";
//$ Import Models of Routes.

import { Response, Request } from "express";
import { CustomError } from "../helpers/customError";

export const routes = Router();

async function sendError(res: Response, error: CustomError) {
  res.status(400).json({
    type: error.type || "unknown",
    payload: error.payload || error.message,
  });
}

const wrapperError = (fn: any) => async (req: Request, res: Response) => {
  try {
    await fn(req, res);
  } catch (error) {
    sendError(res, error);
  }
};

routesData.forEach((routeData) => {
  routeData.routesList.forEach((route) => {
    routes[route.method](
      `/${routeData.module}${route.endpoint}`,
      wrapperError(controller.userGet)
    );
  });
});

// const generatorInterface = <T>(type: T) => {
//   // type say = (value: T) => void;

//   let saySomething = (value: T) => {};

//   saySomething = (value) => {
//     console.log(value);
//   };

//   saySomething("hello");
// };

// generatorInterface("string");
