import ServicesInjector, { AllServices, Auto, Instantiate } from "@services_injector";

import GeneratorFn from "./features/generator-fn.service";
import GeneratorImport from "./features/generator-import.service";
import GeneratorTag from "./features/generator-tag.service";
import GeneratorRouteFn from "./features/generator-route-fn.service";

@Instantiate
class Generator {

    @Auto public function: GeneratorFn;
    @Auto public import: GeneratorImport;
    @Auto public tag: GeneratorTag;
    @Auto public routeFunction: GeneratorRouteFn;


    _initial = (S: AllServices) => {
        S.generator.routeFunction = new GeneratorRouteFn(
            [{ _fs_file: S.fs.file }]);

        S.generator.function = new GeneratorFn(
            [{ _fs_file: S.fs, _ast_function: S.ast, _ast_route_function: S.ast.route_function}]);

        S.generator.import = new GeneratorImport(
            [{ _fs_file: S.fs.file, _ast_import: S.ast.import }]);

        S.generator.tag = new GeneratorTag(
            [{ _fs_file: S.fs.file, _ast_comment: S.ast.comment }]);
    }
}

export default Generator;