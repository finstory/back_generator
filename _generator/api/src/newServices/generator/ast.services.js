const fs = require('fs');
const parser = require('@babel/parser');
const { S, addServices } = require('../../utils/service/injector');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');
const { throwError } = require('../../helpers/customError');
const services = {};
addServices("ast", services);

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
            const commentsList = path.node.leadingComments;
            commentsList?.forEach(obj => {
                if (obj.value === comment) {
                    pos.start = obj.start;
                    pos.end = obj.end;
                }
            });
        },
    });

    if (Object.keys(pos).length > 0) return pos;
    else return throwError("not_found", 404, `Comment ${comment} not found in code.`);
}

//% IMPORTS :

services.editImport = (textCode, importName, newImportPath, newImportName) => {
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

services.replaceCompilerBody = (textCode, name, newPropsList = ["auth", "products"]) => {
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


const main = async () => {
    try {
        const options = {
            filePath: "D:/Programacion_Extra/Node_ts/_generator/api/src/test.ts",
            tagName: 'ADD',
            codeToAdd: 'codigo',
            addSpace: false
        };
        // services.addCodeAfterTag(options);

        const path = "D:/Programacion_Extra/Node_ts/api_ts/src/controllers/testControllers.ts";
        services.getPosFunctionProperty(path, "controller", "getUser");
    } catch (error) {
        console.log(error.message)
    }
}

// main();

module.exports = services;