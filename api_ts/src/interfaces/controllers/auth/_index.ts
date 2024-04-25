//$IMPORT_START
import * as GetTest from "./getTest";
import * as GetAuthByEmail from "./getAuthByEmail";
import * as SetTest from "./getTest";

class Controllers {
  //$CONTROLLER_START

  async getAuth(req: GetTest.Req, res: GetTest.Res) {}

  async getAuthByEmail(req: GetAuthByEmail.Req, res: GetAuthByEmail.Res) {}

}

const controllers = new Controllers();

export default controllers;