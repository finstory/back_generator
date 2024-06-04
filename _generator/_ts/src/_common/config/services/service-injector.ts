import { AllServices } from "./all-services";
import { Auto, Instantiate } from "./auto-instantiate.services";

class SuperInjector {
    protected readonly S: AllServices;

    constructor(S: AllServices) {
        this.S = S;
    }
}

class Injector {
    constructor(listServices?: any[]) {
        if (listServices && listServices.length > 0)
            listServices.forEach((service) => {
                const [propName, serviceInstance] = Object.entries(service)[0];
                this[propName] = serviceInstance;
            });
    }
}

const initialInjector = (S: AllServices) => {
    for (const service of Object.values(S)) service._initial && service._initial(S);
}

export { AllServices, Injector, Auto, Instantiate, initialInjector };
export default SuperInjector;
