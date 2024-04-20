//<IMPORTS>

import other from "./controller";
import dd from "./controller";

//<CONTROLLERS>

controller.patchFacu = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "patchFacu" };

  res.status(200).json(data);
};

controller.other = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "patchFacu" };

  res.status(200).json(data);
};

//hello
