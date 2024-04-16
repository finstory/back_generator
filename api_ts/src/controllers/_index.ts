import auth from "./authControllers";
import user from "./userControllers";

const controllers = {
...auth,
...user,
};

export default controllers;