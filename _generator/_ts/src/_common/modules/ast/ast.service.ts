import ServicesInjector, { AllServices } from "@services_injector";

import AstComment from "./features/ast-comment.service";
import AstImport from "./features/ast-import.service";
import AstFunction from "./features/ast-function.service";
import AstRouteFunction from "./features/ast-router-function.service";

class Ast extends ServicesInjector {

    public readonly comments: AstComment;
    public readonly imports: AstImport;
    public readonly functions: AstFunction;
    public readonly route_functions: AstRouteFunction

    constructor(S: AllServices) {
        super(S);
        this.comments = new AstComment(S);
        this.imports = new AstImport(S);
        this.functions = new AstFunction(S);
        this.route_functions = new AstRouteFunction(S);
    }

}

export default Ast;