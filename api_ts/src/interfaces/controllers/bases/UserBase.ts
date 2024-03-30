import { Response, Request } from "express";
import * as I from "../models/UserInterface";

class UserBase {
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

const controllers = new UserBase();

export default controllers;
