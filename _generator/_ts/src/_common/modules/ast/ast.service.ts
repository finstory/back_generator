import { AllServices, Auto, Instantiate } from "@services_injector";

import AstCommentService from "./features/ast-comment.service";
import AstImportService from "./features/ast-import.service";
import AstRouteFunctionService from "./features/ast-router-function.service";
import AstFunctionCompilerService from "./features/ast-compiler-function.service";

@Instantiate
class Ast {
    @Auto public comment: AstCommentService;
    @Auto public import: AstImportService;
    @Auto public compiler_function: AstFunctionCompilerService;
    @Auto public route_function: AstRouteFunctionService;




    _initial = (S: AllServices) => {}
}

export default Ast;