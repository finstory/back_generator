import { AllServices } from "./AllServices";


class ServiceInjector {
    protected readonly S: AllServices;

    constructor(S: AllServices) {
        this.S = S;
    }
}

export { AllServices };
export default ServiceInjector;
