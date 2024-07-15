import ServicesInjector, { AllServices } from "@services_injector";

import GeneratorFn from "./features/generator-fn.service";
import GeneratorImport from "./features/generator-import.service";
import GeneratorTag from "./features/generator-tag.service";


class Generator extends ServicesInjector {

    public readonly functions: GeneratorFn;
    public readonly imports: GeneratorImport;
    public readonly tags: GeneratorTag;

    constructor(S: AllServices) {
        super(S);
        this.functions = new GeneratorFn(S);
        this.imports = new GeneratorImport(S);
        this.tags = new GeneratorTag(S);
    }

}

export default Generator;