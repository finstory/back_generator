import ServicesInjector from "@services_injector";
import throwError from "@throw_error";

import traverse, { Node } from '@babel/traverse';
import { Comment } from '@babel/types';

import { TextCode } from '@interfaces';
import { Pos } from '@interfaces';

import { codeToAst } from "@utils";
import { printInfo } from "@/_common/helpers/wordsManager";

class AstCommentService {

    getPosComment = (textCode: TextCode, comment: string): Pos => {

        const ast = codeToAst(textCode);
        const pos: Pos = { start: 0, end: 0 };

        traverse(ast, {
            enter(path) {
                const leadingCommentsList: Comment[] = path.node.leadingComments;
                const innerCommentsList = path.node.innerComments;
                let uniqueValues = [];

                leadingCommentsList?.forEach(obj => {

                    if (obj.value === comment && !uniqueValues.includes(obj.value)) {
                        pos.start = obj.start;
                        pos.end = obj.end;
                    }
                    uniqueValues.push(obj.value);
                });

                innerCommentsList?.forEach(obj => {
                    if (obj.value === comment && !uniqueValues.includes(obj.value)) {
                        pos.start = obj.start;
                        pos.end = obj.end;
                    }
                    uniqueValues.push(obj.value);
                });

            },
        });

        if (pos.end !== 0) {
            printInfo("AST", `Position obtained for the comment '${comment}'.`);
            return pos;
        }
        else throwError("not_found", `[AST] Comment '${comment}'`);

    }

}

export default AstCommentService;