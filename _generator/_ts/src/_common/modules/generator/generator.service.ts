import ServicesInjector, { AllServices } from "@services_injector";

import GeneratorFn from "./features/generator-fn.service";
import GeneratorImport from "./features/generator-import.service";
import GeneratorTag from "./features/generator-tag.service";


class Generator extends ServicesInjector {

    public readonly functions: GeneratorFn;
    public readonly imports: GeneratorImport;
    public readonly tags: GeneratorTag;

    constructor(services: AllServices) {
        super(services);
        this.functions = new GeneratorFn(services);
        this.imports = new GeneratorImport(services);
        this.tags = new GeneratorTag(services);
    }

}

export default Generator;