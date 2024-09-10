import { Auto, Initial, Initialization, AutoInstance } from "@services_injector";

import GeneratorFn from "./features/generator-fn.service";
import GeneratorImport from "./features/generator-import.service";
import GeneratorTagService from "./features/generator-tag.service";
import GeneratorRouteFn from "./features/generator-route-fn.service";
import GeneratorWrapperService from "./features/generator-wrapper.service";
@AutoInstance
@Initialization
class GeneratorService {

    @Auto @Initial public tag: GeneratorTagService;
    @Auto public function: GeneratorFn;
    @Auto public import: GeneratorImport;
    @Auto public routeFunction: GeneratorRouteFn;
    @Auto public wrapper: GeneratorWrapperService;

}

export default GeneratorService;