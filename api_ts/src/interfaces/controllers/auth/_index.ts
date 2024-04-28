//<IMPORTS>
import * as GetAuthByEmail from "./getAuthByEmail";
import * as GetAuthByEmail from "./getAuthByEmail";
import * as GetAuth from "./getAuth";
import * as PostAuthLogin from "./postAuthLogin";
class Controllers {
  //<CONTROLLERS>
async getAuth(req: GetAuth.Req, res: GetAuth.Res) {}
async postAuthLogin(req: PostAuthLogin.Req, res: PostAuthLogin.Res) {}
  
}

const controllers = new Controllers();

export default controllers;