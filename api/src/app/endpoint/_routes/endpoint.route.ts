import { Router } from "express";
import { controller, validation } from "@endpoint/endpoint.controller";

const router = Router();

router.post("/", controller.postEndpoint);
router.patch("/", controller.patchEndpoint);
router.delete("/", controller.deleteEndpoint);
router.patch("/description", controller.patchEndpointDescription);

export default router;