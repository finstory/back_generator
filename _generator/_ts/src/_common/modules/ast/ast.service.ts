import { AllServices, Auto, Instantiate } from "@services_injector";

import AstComment from "./features/ast-comment.service";
import AstImport from "./features/ast-import.service";
import AstFunction from "./features/ast-function.service";
import AstRouteFunction from "./features/ast-router-function.service";

@Instantiate
class Ast {
    @Auto public comment: AstComment;
    @Auto public import: AstImport;
    @Auto public function: AstFunction;
    @Auto public route_function: AstRouteFunction

    _initial = (S: AllServices) => {
    }
}

export default Ast;