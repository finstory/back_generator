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
    };
}


export interface AstClassProperty {
    type: "ClassProperty";
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
    static: boolean;
    variance: null;
    key: {
        type: "Identifier";
        start: number;
        end: number;
        name: string;
    };
    // computed: boolean;
    // value: {
    //     type: "ArrowFunctionExpression";
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
    //     };
    //     id: null;
    //     generator: boolean;
    //     async: boolean;
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
    // leadingComments: [
    //     {
    //         type: "CommentLine";
    //         value: string;
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
    //     }
    // ];
}