const fs = require('fs');
const parser = require('@babel/parser');
const { S, addServices } = require('../../utils/service/injector');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');
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
    });

    return code;
};

//% COMMENTS :
services.getCommentPosition = (textCode, comment) => {
    const ast = codeToAst(textCode);
    const pos = { start: null, end: null };
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

    return pos;
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

services.removeImport = (textCode, importName) => {
    const ast = codeToAst(textCode);

    traverse(ast, {
        ImportDeclaration: (path) => {
            const identifierGetting = path.node.specifiers[0]?.local;

            if (identifierGetting.name === importName) {
                path.remove();
            }
        }
    });

    const textCodeEdited = astToTextCode(ast);

    return textCodeEdited;
}

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
    const controllers = {};
    //hello
    `;

    services.replaceCompilerBody(code, "controllers", ["facu", "auth"]);
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