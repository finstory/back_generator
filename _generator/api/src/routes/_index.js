const { Router } = require("express");

const Users = require("./userRoutes");
const Endpoint = require("./endpointRoutes");
const Controller = require("./controllerRoutes");
const router = Router();
router.use("/users", Users);
router.use("/endpoint", Endpoint);
router.use("/controller", Controller);

// router.use("/:id", (req, res) => {
//   res.json({ success: req.params.id, message: "a trabajar ." });
// });

module.exports = router;
