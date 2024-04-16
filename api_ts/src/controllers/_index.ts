import user from "./userControllers";
import facu from "./facuControllers";

const controllers = {
  ...user,
  ...facu,
};

export default controllers;
