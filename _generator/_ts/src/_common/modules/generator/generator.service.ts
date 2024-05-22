import ServicesInjector, { AllServices } from "@services_injector";

import throwError from "@throw_error";

class Generator extends ServicesInjector {


    
    constructor(S: AllServices) {
        super(S);
    }

    async generacion() {
        //  throwError("bad_request", "id");
        console.log("genert.create");
        this.S.product.test();

    }

    async create(string: any) {
        console.log(string);
    }
}

export default Generator;