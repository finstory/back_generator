import { AllServices, Auto, Instantiate } from "@services_injector";

import AstCommentService from "./features/ast-comment.service";
import AstImportService from "./features/ast-import.service";
import AstRouteFunctionService from "./features/ast-router-function.service";
import AstFunctionCompilerService from "./features/ast-compiler-function.service";
import AstClassService from "./features/ast-class.service";

@Instantiate
class Ast {
    @Auto public comment: AstCommentService;
    @Auto public import: AstImportService;
    @Auto public compilerFunction: AstFunctionCompilerService;
    @Auto public routeFunction: AstRouteFunctionService;
    @Auto public class: AstClassService;



    _initial = (S: AllServices) => { }
}

export default Ast;