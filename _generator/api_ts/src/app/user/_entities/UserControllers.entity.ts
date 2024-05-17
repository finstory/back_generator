//<IMPORTS>
import * as GetUser from "@user/_validator/getUser";
import * as PostUserCreate from "@user/_validator/postUserCreate";

class Controllers {
  //<CONTROLLERS>
  async getUser(req: GetUser.Req, res: GetUser.Res) { }
  async postUserCreate(req: PostUserCreate.Req, res: PostUserCreate.Res) { }
}

const controllers = new Controllers();

export default controllers;