import ServicesInjector, { AllServices } from "@services_injector";

import AstComment from "./features/ast-comment.service";
import AstImport from "./features/ast-import.service";
import AstFunction from "./features/ast-function.service";


class Ast extends ServicesInjector {

    public readonly comments: AstComment;
    public readonly imports: AstImport;
    public readonly functions: AstFunction;

    constructor(S: AllServices) {
        super(S);
        this.comments = new AstComment(S);
        this.imports = new AstImport(S);
        this.functions = new AstFunction(S);
    }

}

export default Ast;