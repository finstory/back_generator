import RouteModel from "./route.model";

class ModuleModel {
    name: string;
    routes?: RouteModel[];

    constructor({ name, routes }) {
        this.name = name;
        this.routes = routes || [];
    }
}

export default ModuleModel;