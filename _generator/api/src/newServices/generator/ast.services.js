
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const services = {};


const code = `
//ready to be removed

const fn = () =>{
    console.log('hello')
};

//ADD

const express = require("express");

const text:string = "sdasda";
`;

const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['typescript'],
});

traverse(ast, {
    enter(path) {
      console.log(path.node.leadingComments);
      console.log(path.node.trailingComments);
    },
  });
// traverse(ast, {

//     VariableDeclaration: (path) => {
//         // console.log(path.node.declarations[0].init)
//         if (path.node.declarations[0].id.name === "fn")
//             path.remove()
//         // path.node.declarations[0].id.name = "other";

//     }
// });


const { code: newCode } = require('@babel/core').transformFromAst(ast, null, {
    retainLines: true
});
// console.log(newCode)

module.exports = services;