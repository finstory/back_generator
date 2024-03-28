import { Response, Request } from "express";
import * as I from "../interfaces/controllers/IUserControllers.js";

class ModelControllers {
  /**
   * @param ENDPOINT - /users/:id
   * @param TYPE - GET
   */
  async userGet(req: I.usersGetReq, res: I.usersGetRes) {}

  /**
   * @param ENDPOINT - /users
   * @param TYPE - POST
   */
  async userPost(req: Request, res: Response) {}
}

const controllers = new ModelControllers();

export default controllers;
