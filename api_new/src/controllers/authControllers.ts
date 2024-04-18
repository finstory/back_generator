import controller from "../interfaces/controllers/auth/_index";
import { throwError } from "../helpers/customError";
//$C_START

controller.getAuthByEmail = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getAuthByEmail" };

  res.status(200).json(data);
};

const router: any = {};

router.post("/reload_types", async ({ params, query, body }, res) => {
  const data: any = { controllerName: "reload_types" };

  res.status(200).json(data);
});

export default controller;
