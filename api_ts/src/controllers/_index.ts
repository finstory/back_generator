import user from "./userControllers";
import auth from "./authControllers";

const controllers = {
...user,
...auth,
};

export default controllers;