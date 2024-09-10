export interface AstClassDeclaration {
    type: "ClassDeclaration";
    id: { type: "Identifier", name: string };
    start: number;
    end: number;
    // loc: {
    //     start: {
    //         line: number;
    //         column: number;
    //         index: number;
    //     };
    //     end: {
    //         line: number;
    //         column: number;
    //         index: number;
    //     };
    // };
    // id: {
    //     type: string;
    //     start: number;
    //     end: number;
    //     loc: {
    //         start: {
    //             line: number;
    //             column: number;
    //             index: number;
    //         };
    //         end: {
    //             line: number;
    //             column: number;
    //             index: number;
    //         };
    //         identifierName: string;
    //     };
    //     name: string;
    // };
    body: {
        type: "ClassBody";
        start: number;
        end: number;
        loc: {
            start: {
                line: number;
                column: number;
                index: number;
            };
            end: {
                line: number;
                column: number;
                index: number;
            };
        };
        body: AstClassProperty[];
        innerComments?: CommentLine[];
    };

}


export interface AstClassProperty {
    type: "ClassProperty";
    optional: boolean;
    // start: number;
    // end: number;
    // loc: {
    //     start: {
    //         line: number;
    //         column: number;
    //         index: number;
    //     };
    //     end: {
    //         line: number;
    //         column: number;
    //         index: number;
    //     };
    // };
    // static: boolean;
    // variance: null;
    decorators?: AstClassDecorators[];
    key: {
        type: "Identifier";
        // start: number;
        // end: number;
        name: string;
    };
    typeAnnotation: {
        type: "TypeAnnotation",
        typeAnnotation: any;
    };
    // typeAnnotation: {
    //     type: "TypeAnnotation",
    //     typeAnnotation: {
    //         type: "GenericTypeAnnotation",
    //         id: {
    //             type: "Identifier",
    //             name: "RouteDto",
    //         },
    //     }
    // }
    //     params: [
    //         {
    //             type: "Identifier";
    //             start: number;
    //             end: number;
    //             loc: {
    //                 start: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //                 end: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //                 identifierName: string;
    //             };
    //             name: string;
    //             typeAnnotation: {
    //                 type: "TypeAnnotation";
    //                 start: number;
    //                 end: number;
    //                 loc: {
    //                     start: {
    //                         line: number;
    //                         column: number;
    //                         index: number;
    //                     };
    //                     end: {
    //                         line: number;
    //                         column: number;
    //                         index: number;
    //                     };
    //                 };
    //                 typeAnnotation: {
    //                     type: "GenericTypeAnnotation";
    //                     start: number;
    //                     end: number;
    //                     loc: {
    //                         start: {
    //                             line: number;
    //                             column: number;
    //                             index: number;
    //                         };
    //                         end: {
    //                             line: number;
    //                             column: number;
    //                             index: number;
    //                         };
    //                     };
    //                     typeParameters: null;
    //                     id: {
    //                         type: "QualifiedTypeIdentifier";
    //                         start: number;
    //                         end: number;
    //                         loc: {
    //                             start: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                             end: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                         };
    //                         qualification: {
    //                             type: "QualifiedTypeIdentifier";
    //                             start: number;
    //                             end: number;
    //                             loc: {
    //                                 start: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                                 end: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                             };
    //                             qualification: {
    //                                 type: "Identifier";
    //                                 start: number;
    //                                 end: number;
    //                                 loc: {
    //                                     start: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     end: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     identifierName: string;
    //                                 };
    //                                 name: string;
    //                             };
    //                             id: {
    //                                 type: "Identifier";
    //                                 start: number;
    //                                 end: number;
    //                                 loc: {
    //                                     start: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     end: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     identifierName: string;
    //                                 };
    //                                 name: string;
    //                             };
    //                         };
    //                         id: {
    //                             type: "Identifier";
    //                             start: number;
    //                             end: number;
    //                             loc: {
    //                                 start: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                                 end: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                                 identifierName: string;
    //                             };
    //                             name: string;
    //                         };
    //                     };
    //                 };
    //             };
    //         },
    //         {
    //             type: "Identifier";
    //             start: number;
    //             end: number;
    //             loc: {
    //                 start: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //                 end: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //                 identifierName: string;
    //             };
    //             name: string;
    //             typeAnnotation: {
    //                 type: "TypeAnnotation";
    //                 start: number;
    //                 end: number;
    //                 loc: {
    //                     start: {
    //                         line: number;
    //                         column: number;
    //                         index: number;
    //                     };
    //                     end: {
    //                         line: number;
    //                         column: number;
    //                         index: number;
    //                     };
    //                 };
    //                 typeAnnotation: {
    //                     type: "GenericTypeAnnotation";
    //                     start: number;
    //                     end: number;
    //                     loc: {
    //                         start: {
    //                             line: number;
    //                             column: number;
    //                             index: number;
    //                         };
    //                         end: {
    //                             line: number;
    //                             column: number;
    //                             index: number;
    //                         };
    //                     };
    //                     typeParameters: null;
    //                     id: {
    //                         type: "QualifiedTypeIdentifier";
    //                         start: number;
    //                         end: number;
    //                         loc: {
    //                             start: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                             end: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                         };
    //                         qualification: {
    //                             type: "QualifiedTypeIdentifier";
    //                             start: number;
    //                             end: number;
    //                             loc: {
    //                                 start: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                                 end: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                             };
    //                             qualification: {
    //                                 type: "Identifier";
    //                                 start: number;
    //                                 end: number;
    //                                 loc: {
    //                                     start: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     end: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     identifierName: string;
    //                                 };
    //                                 name: string;
    //                             };
    //                             id: {
    //                                 type: "Identifier";
    //                                 start: number;
    //                                 end: number;
    //                                 loc: {
    //                                     start: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     end: {
    //                                         line: number;
    //                                         column: number;
    //                                         index: number;
    //                                     };
    //                                     identifierName: string;
    //                                 };
    //                                 name: string;
    //                             };
    //                         };
    //                         id: {
    //                             type: "Identifier";
    //                             start: number;
    //                             end: number;
    //                             loc: {
    //                                 start: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                                 end: {
    //                                     line: number;
    //                                     column: number;
    //                                     index: number;
    //                                 };
    //                                 identifierName: string;
    //                             };
    //                             name: string;
    //                         };
    //                     };
    //                 };
    //             };
    //         }
    //     ];
    //     body: {
    //         type: "BlockStatement";
    //         start: number;
    //         end: number;
    //         loc: {
    //             start: {
    //                 line: number;
    //                 column: number;
    //                 index: number;
    //             };
    //             end: {
    //                 line: number;
    //                 column: number;
    //                 index: number;
    //             };
    //         };
    //         body: any[];
    //         directives: any[];
    //     };
    // };
    leadingComments?: CommentLine[];
}

export interface CommentLine {
    type: "CommentLine";
    value: string;
    start: number;
}

export interface AstClassDecorators {
    type: "Decorator";
    expression: {
        type: "CallExpression";
        callee: BasicDecorator | ValidationDecorator;
        arguments?: (TypeArguments | LiteralArguments)[];
    };
}

interface ValidationDecorator {
    type: "MemberExpression";
    object: {
        type: "Identifier";
        name: string;
    };
    property: {
        type: "Identifier";
        name: string;
    };
};

interface TypeArguments {

    type: "ArrowFunctionExpression",
    params: any[],
    body: {
        type: "Identifier",
        name: string,
    },
}

interface LiteralArguments {
    type: "NumericLiteral" | "StringLiteral",
    value: any,
}


interface BasicDecorator {
    type: "Identifier",
    name: string,
};