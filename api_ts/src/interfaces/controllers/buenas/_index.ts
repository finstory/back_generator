//$IMPORT_START
import * as UserPost from "./userPost";
import * as UserGet from "./userGet";

class Controllers {
//$CONTROLLER_START

async userPost (req: UserPost.Req, res: UserPost.Res) {}

async userGet (req: UserGet.Req, res: UserGet.Res) {}

}

const controllers = new Controllers();

export default controllers;
