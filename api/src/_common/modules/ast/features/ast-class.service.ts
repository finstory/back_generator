//! fs.writeFileSync('constants.json', JSON.stringify(expression));
import throwError from "@throw_error";

import traverse, { Node } from "@babel/traverse";
import { TextCode, AstClassDeclaration, AstClassProperty, CommentLine } from "@interfaces";
import { printInfo } from "@helpers/wordsManager";
import { astToTextCode, codeToAst } from "@utils";

import { ClassPropertyDto, PropertyDecoratorDto } from "../_dtos/ast-class.dto";
import { RequestParamsDto } from "@/app/endpoint/_dtos/request-params.dto";

type TypeName = "ArrayTypeAnnotation" | "TSNumberKeyword" | "TSStringKeyword" | "TSBooleanKeyword" | "TSObjectKeyword" | "TSAnyKeyword" | "TSUnknownKeyword" | "TSBigIntKeyword" | "TSNullKeyword" | "TSUndefinedKeyword" | "TSNeverKeyword" | "TSVoidKeyword" | "TSSymbolKeyword" | "TSUnknownKeyword" | "TSObjectKeyword";

const getNativeType = (typeName: TypeName) => {
    switch (typeName) {
        case "TSNumberKeyword": return "number";
        case "TSStringKeyword": return "string";
        case "TSBooleanKeyword": return "boolean";
        case "TSObjectKeyword": return "object";
        case "ArrayTypeAnnotation": return "array";
        case "TSAnyKeyword": return "any";
        case "TSUnknownKeyword": return "unknown";
        case "TSBigIntKeyword": return "bigint";
        case "TSNullKeyword": return "null";
        case "TSUndefinedKeyword": return "undefined";
        case "TSNeverKeyword": return "never";
        case "TSVoidKeyword": return "void";
        case "TSSymbolKeyword": return "symbol";
        default: return null;
    }
}


class AstClassService {

    getAllProperties = async (textCode: string, className: string): Promise<ClassPropertyDto[]> => {

        let propertiesList: ClassPropertyDto[] = [];
        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast,
            {
                ClassDeclaration: (path) => {
                    const expression = path.node as AstClassDeclaration;

                    if (expression.id.name === className) {

                        ok = true;

                        expression.body.body.forEach((prop: AstClassProperty) => {
                            const typeAnnotation = prop.typeAnnotation.typeAnnotation;

                            const propResult: ClassPropertyDto = {
                                className,
                                name: prop.key.name,
                                optional: prop.optional || false,
                                typePosition: {
                                    start: typeAnnotation.start, end: typeAnnotation.end
                                },
                            }

                            propertiesList.push(propResult);
                        });

                    }
                },
            });

        !ok && throwError("AST", "not_found", `Class ${className}`);

        propertiesList.length > 0 &&
            printInfo("AST", `Properties of class '${className}' found.`);

        propertiesList = propertiesList.map((prop) => {
            const { start, end } = prop.typePosition;
            const typeStringified = textCode.substring(start, end);

            return { ...prop, typeStringified };
        });

        return propertiesList;
    }

    addProperty = async (
        textCode: string,
        { className, name, typeStringified, objectType }: ClassPropertyDto
    ): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ClassDeclaration: (path) => {
                const expression = path.node as AstClassDeclaration;

                if (expression.id.name === className) {

                    const newProp: AstClassProperty = {
                        type: "ClassProperty",
                        key: { type: "Identifier", name: name },
                        optional: false,
                        typeAnnotation: {
                            type: "TypeAnnotation",
                            typeAnnotation: { type: "StringLiteralTypeAnnotation", value: `<EDIT>${typeStringified}${objectType ? "[]" : ""}<END_EDIT>` },
                        }
                    };

                    expression.body.body.push(newProp);
                    ok = true;
                }
            },
        });

        !ok && throwError("AST", "not_found", `Class ${className}`);

        printInfo("AST", `Class property '${name}' in class '${className}' added.`);

        const astWithTags = await astToTextCode(ast);
        return astWithTags.replace(/"<EDIT>/g, "").replace(/<END_EDIT>"/g, "");
    }

    removeProperty = async (
        textCode: string,
        { className, name, comment }: ClassPropertyDto
    ): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;
        let isFirstProp = false;

        traverse(ast, {
            ClassDeclaration: (path) => {
                const expression = path.node as AstClassDeclaration;

                if (expression.id.name === className) {

                    let newBody = expression.body.body.filter((prop: AstClassProperty, index) => {
                        if (prop.key.name === name) {
                            if (index === 0) isFirstProp = true;
                            ok = true; return false;
                        }
                        else return true;
                    });

                    if (newBody) {

                        if (comment) {
                            const commentLine: CommentLine[] = [{ type: "CommentLine", value: comment, start: expression.body.start }];

                            if (newBody.length === 0)
                                expression.body.innerComments = commentLine;
                            else if (isFirstProp)
                                newBody[0].leadingComments = commentLine;
                        }

                        expression.body.body = newBody;
                    }

                }
            },
        });

        !ok && throwError("AST", "not_found", `Class property ${name} in class ${className}`);

        printInfo("AST", `Class property '${name}' in class '${className}' removed.`);

        return await astToTextCode(ast);
    };

}
export default AstClassService;
