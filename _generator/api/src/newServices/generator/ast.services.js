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
        plugins: ['@babel/plugin-transform-typescript'],
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
                const propsList = path.node.declarations[0].init.properties;
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
    console.log(textCodeEdited);
}

//% FUNCTIONS :

services.editFunctionProperty = (textCode, compilerName, propName, newPropName) => {
    const ast = codeToAst(textCode);
    traverse(ast, {
        ExpressionStatement: (path) => {
            const expression = path.node.expression;

            if (
                expression.type === "AssignmentExpression"
                && expression.left.object.name === compilerName
                && expression.left.property.name === propName
            )
                expression.left.property.name = newPropName;

        }
    });

    const textCodeEdited = astToTextCode(ast);
};

services.getPosFunctionProperty = (textCode, compilerName, propName) => {
    const pos = { start: null, end: null };
    const ast = codeToAst(textCode);
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
            }

        }
    });

    return pos;
};


const main = async () => {
    const options = {
        filePath: "D:/Programacion_Extra/Node_ts/_generator/api/src/test.ts",
        tagName: 'ADD',
        codeToAdd: 'codigo',
        addSpace: false
    };
    // services.addCodeAfterTag(options);

    const code = `
    //bay
    const axios = require("axios");
    const controller = {};

    controller.patchFacu = async ({ params, query, body }, res) => {
        const data: any = {controllerName: 'patchFacu'};
        
        res.status(200).json(data);
    };

    //yes
    controller.other = async ({ params, query, body }, res) => {
        const data: any = {controllerName: 'patchFacu'};
        
        res.status(200).json(data);
    };

    //hello
    `;

    // services.editFunctionProperty(code, "controller", "other", "joojojoF");

    // services.replaceCompilerBody(code, "controllers", ["facu", "auth"]);
    // services.removeImport(code, "controller");

    // services.editImport(code, "controller", "./jeje", "vaa");
}

main();

// console.log(addCodeAfterTag(code, 'ADD',"facundo"));

// traverse(ast, {

//     VariableDeclaration: (path) => {
//         // console.log(path.node.declarations[0].init)
//         if (path.node.declarations[0].id.name === "fn")
//             path.remove()
//         // path.node.declarations[0].id.name = "other";

//     }
// });


// const { code: newCode } = require('@babel/core').transformFromAst(ast, null, {
//     retainLines: true
// });
// console.log(newCode)

module.exports = services;