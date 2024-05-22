import { AllServices } from "./AllServices";


class ServicesInjector {
    protected readonly S: AllServices;

    constructor(S: AllServices) {
        this.S = S;
    }
}

export { AllServices };
export default ServicesInjector;
