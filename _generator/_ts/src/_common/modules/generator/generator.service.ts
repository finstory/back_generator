import ServicesInjector, { AllServices, Auto, Instantiate } from "@services_injector";

import GeneratorFn from "./features/generator-fn.service";
import GeneratorImport from "./features/generator-import.service";
import GeneratorTag from "./features/generator-tag.service";
import GeneratorRouteFn from "./features/generator-route-fn.service";
import GeneratorWrapperService from "./features/generator-wrapper.service";

@Instantiate
class Generator {

    @Auto public function: GeneratorFn;
    @Auto public import: GeneratorImport;
    @Auto public tag: GeneratorTag;
    @Auto public routeFunction: GeneratorRouteFn;
    @Auto public wrapper: GeneratorWrapperService;


    _initial = (S: AllServices) => {
        S.generator.routeFunction = new GeneratorRouteFn(
            [
                { _ast_route_function: S.ast.routeFunction },
                { _fs_file: S.fs.file }
            ]);

        S.generator.function = new GeneratorFn(
            [
                { _fs_file: S.fs.file },
                { _ast_route_function: S.ast.routeFunction }
            ]);

        S.generator.import = new GeneratorImport(
            [
                { _fs_file: S.fs.file },
                { _ast_import: S.ast.import }
            ]);

        S.generator.tag = new GeneratorTag(
            [
                { _fs_file: S.fs.file },
                { _ast_comment: S.ast.comment }
            ]);
        S.generator.wrapper = new GeneratorWrapperService(
            [
                { _fs_file: S.fs.file }
            ]);
    }
}

export default Generator;