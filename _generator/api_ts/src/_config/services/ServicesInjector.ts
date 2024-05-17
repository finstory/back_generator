import { AllServices } from "./AllServices";

class ServicesInjector {

    public readonly S: AllServices;

    constructor(S: AllServices) {
        this.S = S;
    }
}

export default ServicesInjector;