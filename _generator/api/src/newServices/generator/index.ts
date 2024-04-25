//$IMPORT_START
import * as GetTest from "./getTest";
import * as GetAuthByEmail from "./getAuthByEmail";
import * as SetTest from "./getTest";

class Controllers {
  //$CONTROLLER_START

  async getAuth(req: GetAuth.Req, res: GetAuth.Res) {}

  async getAuthByEmail(req: GetAuthByEmail.Req, res: GetAuthByEmail.Res) {}

}

const controllers = new Controllers();

export default controllers;