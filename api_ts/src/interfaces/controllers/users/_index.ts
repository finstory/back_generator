import { Response, Request } from "express";
import * as UserGet from "./userGet";

class Controllers {
  async userGet(req: UserGet.Req, res: UserGet.Res) {}

  async userPost(req: Request, res: Response) {}
}

const controllers = new Controllers();

export default controllers;
