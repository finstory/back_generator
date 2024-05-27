//<IMPORTS>
// import * as GetUser from "@/app/user/_validations/get-user";
// import * as PostUserCreate from "@/app/user/_validations/post-user-create";
import { Request, Response } from "express";

class Controllers {
  //<CONTROLLERS>
  async getUser(req: Request, res: Response) { }
  async postUserCreate(req: Request, res: Response) { }
}

const controllers = new Controllers();

export default controllers;