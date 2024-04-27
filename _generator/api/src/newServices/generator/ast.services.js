const fs = require('fs');
const parser = require('@babel/parser');
const S = require('../../utils/service/injector');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');
const { throwError } = require('../../helpers/customError');
const { UpFirst } = require('../../helpers/wordsManager');
const ts = require('typescript');
const services = {};
S.add("ast", services);

//% AST :

const codeToAst = (textCode) => {
    return parser.parse(textCode, {
        sourceType: 'module',
        plugins: ['typescript'],
    });
}

const astToTextCode = (ast) => {
    const { code } = transformFromAst(ast, null, {
        retainLines: true,
        comments: true,
        // plugins: ['@babel/plugin-transform-typescript'],
    });

    return code;
};

//% COMMENTS :

services.getPosComment = (textCode, comment) => {
    let pos = {};
    const ast = codeToAst(textCode);

    traverse(ast, {
        enter(path) {
            const leadingCommentsList = path.node.leadingComments;
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
                console.log(!uniqueValues.includes(obj.value))
                if (obj.value === comment && !uniqueValues.includes(obj.value)) {
                    pos.start = obj.start;
                    pos.end = obj.end;
                }
                uniqueValues.push(obj.value);
            });

        },
    });

    if (Object.keys(pos).length > 0) return pos;
    else return throwError("not_found", 404, `Comment ${comment} not found in code.`);
}

//% IMPORTS :

services.editImport = (textCode, importName, newImportName, newImportPath) => {
    const ast = codeToAst(textCode);

    traverse(ast, {
        ImportDeclaration: (path) => {
            const identifierGetting = path.node.specifiers[0]?.local;

            if (identifierGetting.name === importName) {
                if (newImportPath) path.node.source.value = newImportPath;
                if (newImportName) identifierGetting.name = newImportName;
            }
        }
    });

    const textCodeEdited = astToTextCode(ast);

    return textCodeEdited;

}

services.getPosImport = (textCode, importName) => {
    let pos = {};
    const ast = codeToAst(textCode);

    traverse(ast, {
        ImportDeclaration: (path) => {
            const identifierGetting = path.node.specifiers[0]?.local;

            if (identifierGetting.name === importName) {
                pos.start = path.node.start;
                pos.end = path.node.end;
            }
        }
    });

    if (Object.keys(pos).length > 0) return pos;
    else return throwError("not_found", 404, `Import ${importName} not found in code.`);
};

//% VARS :

services.replaceCompilerBody = (textCode, name, newPropsList = []) => {
    const ast = codeToAst(textCode);
    traverse(ast, {
        VariableDeclaration: (path) => {
            if (path.node.declarations[0].id.name === name) {
                // path.node.declarations[0].init.properties = newBody;
                const newProps = newPropsList.map(prop => ({
                    type: 'SpreadElement',
                    argument: {
                        type: 'Identifier',
                        name: prop
                    }
                }));

                path.node.declarations[0].init.properties = newProps;

            }
        }
    });

    const textCodeEdited = astToTextCode(ast);
    return textCodeEdited;
}

//% FUNCTIONS :

services.editFunctionProperty = (textCode, compilerName, propName, newPropName) => {
    const ast = codeToAst(textCode);
    let ok = false;
    traverse(ast, {
        ExpressionStatement: (path) => {
            const expression = path.node.expression;

            if (
                expression.type === "AssignmentExpression"
                && expression.left.object.name === compilerName
                && expression.left.property.name === propName
            ) {
                expression.left.property.name = newPropName;
                ok = true;
            }
        }
    });
    if (!ok) throwError("not_found", 404, `function ${propName} not found in code.`);
    const textCodeEdited = astToTextCode(ast);
    return textCodeEdited;
};

services.getPosFunctionProperty = (textCode, compilerName, propName) => {
    const pos = { start: null, end: null };
    const ast = codeToAst(textCode);
    let ok = false;

    traverse(ast, {
        ExpressionStatement: (path) => {
            const expression = path.node.expression;

            if (
                expression.type === "AssignmentExpression"
                && expression.left.object.name === compilerName
                && expression.left.property.name === propName
            ) {
                pos.start = path.node.start;
                pos.end = path.node.end;
                ok = true;
            }

        }
    });
    if (!ok) throwError("not_found", 404, `function '${propName}' not found in code.`);
    return pos;
};

//% CLASS :


services.editClassMethod = (textCode, className, methodName, newMethodName, argsList = "request_method") => {
    if (argsList === "request_method") {
        const newQualifiedName = newMethodName ? UpFirst(newMethodName) : UpFirst(methodName);
        argsList = [
            { name: "req", newQualifiedName },
            { name: "res", newQualifiedName }
        ]
    }

    const ast = codeToAst(textCode);
    let ok = false;
    traverse(ast, {
        ClassDeclaration: (path) => {
            if (path.node.id.name === className) {

                const methodsList = path.node.body;

                methodsList.body.forEach(method => {
                    if (method.key.name === methodName) {
                        method.key.name = newMethodName;
                        ok = true;

                        if (argsList && argsList.length > 0) {
                            method.params.forEach((param) => {
                                argsList.forEach(arg => {

                                    if (param.name === arg.name)
                                        param.typeAnnotation.typeAnnotation.typeName.left.name = arg.newQualifiedName;

                                });
                            });
                        }
                    }
                });
            }
        }
    });
    if (!ok) throwError("not_found", 404, `function ${methodName} not found in code.`);
    const textCodeEdited = astToTextCode(ast);
    return textCodeEdited;
};

services.getPosClassMethod = (textCode, className, methodName) => {
    const pos = { start: null, end: null };
    const ast = codeToAst(textCode);
    let ok = false;

    traverse(ast, {
        ClassDeclaration: (path) => {
            if (path.node.id.name === className) {

                const methodsList = path.node.body;
                methodsList.body.forEach(method => {
                    if (method.key.name === methodName) {
                        pos.start = method.start;
                        pos.end = method.end;
                        ok = true;
                    }
                });
            }
        }
    });
    if (!ok) throwError("not_found", 404, `function ${methodName} not found in code.`);
    return pos;
};

//% INTERFACES & TYPES :

services.addTypes = (textCode, typeName, newType = { key, type, elementType, optional, value }) => {
    const ast = codeToAst(textCode);
    let ok = false;

    traverse(ast, {
        TSTypeAliasDeclaration: (path) => {
            if (path.node.id.name === typeName) {
                path.node.typeAnnotation.members.push({
                    type: 'ObjectTypeProperty',
                    key: {
                        type: 'Identifier',
                        name: `\n  ${newType.key}${newType.optional ? "?" : ""}`,
                    },
                    value: {
                        type: 'TSTypeReference',
                        typeName: {
                            type: 'Identifier',
                            name: `${newType.type}${newType.elementType === "array" ? "[]" : ""};`,
                        }
                    }
                });
                ok = true;

            }
        }
    })

    if (!ok) throwError("not_found", 404, `type ${typeName} not found in code.`);

    const textCodeEdited = astToTextCode(ast);
    return textCodeEdited;

}

services.editTypes = (textCode, typeName, newType = { prevKey, key, type, elementType, optional, value }) => {
    const ast = codeToAst(textCode);
    let ok = false;

    traverse(ast, {
        TSTypeAliasDeclaration: (path) => {
            if (path.node.id.name === typeName) {
                path.node.typeAnnotation.members.forEach((member) => {
                    if (member.key.name === newType.prevKey) {
                        member.optional = newType.optional;
                        member.key.name = newType.key;
                        member.typeAnnotation.typeAnnotation =
                        {
                            "type": "TSTypeReference",
                            "typeName": {
                                "type": "Identifier",
                                "name": `${newType.type}${newType.elementType === "array" ? "[]" : ""}`,
                            },
                        }
                    }
                });
                ok = true;

            }
        }
    })

    if (!ok) throwError("not_found", 404, `type ${typeName} not found in code.`);

    const textCodeEdited = astToTextCode(ast);
    return textCodeEdited;

}

services.getPosTypes = (textCode, typeName, key) => {
    const pos = { start: null, end: null };
    const ast = codeToAst(textCode);
    let ok = false;

    traverse(ast, {
        TSTypeAliasDeclaration: (path) => {
            if (path.node.id.name === typeName) {
                path.node.typeAnnotation.members.forEach((member) => {
                    if (member.key.name === key) {
                        pos.start = member.start;
                        pos.end = member.end;
                        ok = true;
                    }
                });
            }
        }
    });

    if (!ok) throwError("not_found", 404, `type ${typeName} not found in code.`);
    return pos;
}

const main = async () => {
    try {

        const textCode = await S.fs.getFile("D:/Programacion_Extra/Node_ts/_generator/api/src/newServices/generator/index.ts")

        const newType = { prevKey: "name", key: 'user', type: 'string', elementType: "", optional: false, value: { id: 2, name: "facu" } }
        // const newTextCode = await services.addTypes(textCode, "params", newType);
        const newTextCode = await services.getPosTypes(textCode, "params", "user");

        console.log(newTextCode);
    } catch (error) {
        console.log(error.message)
    }
}

// main();

module.exports = services;