//<IMPORT>
import auth from "./authControllers";
import facu from "./facuControllers";

const controllers = {
...auth,
...facu,
};

export default controllers;