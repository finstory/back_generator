//$IMPORT_START
import * as PatchFacu from "./patchFacu";
import * as DeleteFacuLook from "./deleteFacuLook"
import * as PatchFacuOher from "./patchFacuOher"
import * as GetFacu from "./getFacu";

class Controllers {
//$CONTROLLER_START

async patchFacu (req: PatchFacu.Req, res: PatchFacu.Res) {}

async deleteFacuLook(req: DeleteFacuLook.Req, res: DeleteFacuLook.Res) { }

async patchFacuOher(req: PatchFacuOher.Req, res: PatchFacuOher.Res) { }

async getFacu (req: GetFacu.Req, res: GetFacu.Res) {}

}

const controllers = new Controllers();

export default controllers;
