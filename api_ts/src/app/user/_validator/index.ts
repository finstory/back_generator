//<IMPORTS>
import * as GetUser from "./getUser";
import * as PostUserCreate from "./postUserCreate";

class Controllers {
  //<CONTROLLERS>
  async getUser(req: GetUser.Req, res: GetUser.Res) { }
  async postUserCreate(req: PostUserCreate.Req, res: PostUserCreate.Res) { }
}

const controllers = new Controllers();

export default controllers;