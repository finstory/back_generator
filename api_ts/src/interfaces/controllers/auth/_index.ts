
import * as GetAuthFacuByEmail from "./getAuthFacuByEmail";
import * as PostAuthLogin from "./postAuthLogin";
class Controllers {
  //<CONTROLLERS>
  async getAuthFacuByEmail(req: GetAuthFacuByEmail.Req, res: GetAuthFacuByEmail.Res) {}
  async postAuthLogin(req: PostAuthLogin.Req, res: PostAuthLogin.Res) {}

}

const controllers = new Controllers();

export default controllers;