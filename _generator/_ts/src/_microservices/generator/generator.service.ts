import ServicesInjector, { AllServices } from "@services_injector";
import FS from "./features/fs/fs.service";
import throwError from "@throw_error";

class Generator extends ServicesInjector {

    public readonly fs: FS;

    constructor(S: AllServices) {
        super(S);
        this.fs = new FS();
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