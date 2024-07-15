import ServicesInjector from "@services_injector";
import throwError from "@throw_error";

import traverse, { Node } from '@babel/traverse';
import { Comment } from '@babel/types';

import { TextCode } from '@interfaces/fs.interface';
import { Pos } from '@interfaces/ast.interface';

import { codeToAst } from "../_utils/transform.util";


class AstComment extends ServicesInjector {

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

        if (pos.end !== 0) return pos;
        else throwError("not_found", `[AST] Comment '${comment}'`);

    }

}

export default AstComment;