//<IMPORTS>
import * as GetUser from "@/app/user/_validations/get-user";
import * as PostUserCreate from "@/app/user/_validations/post-user-create";

class Controllers {
  //<CONTROLLERS>
  async getUser(req: GetUser.Req, res: GetUser.Res) { }
  async postUserCreate(req: PostUserCreate.Req, res: PostUserCreate.Res) { }
}

const controllers = new Controllers();

export default controllers;