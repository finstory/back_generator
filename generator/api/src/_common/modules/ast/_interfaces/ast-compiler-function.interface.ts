export interface AstCompilerFunction {
    type: "AssignmentExpression";
    loc: { start: { line: number, index: number } };
    left: {
        type: string;
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
        object: {
            type: string;
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
                identifierName: string;
            };
            name: string;
        };
        computed: boolean;
        property: {
            type: string;
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
                identifierName: string;
            };
            name: string;
        };
    };
    // right: {
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
    //     };
    //     id: null;
    //     generator: boolean;
    //     async: boolean;
    //     params: [
    //         {
    //             type: string;
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
    //             };
    //             properties: [
    //                 {
    //                     type: string;
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
    //                     method: boolean;
    //                     key: {
    //                         type: string;
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
    //                             identifierName: string;
    //                         };
    //                         name: string;
    //                     };
    //                     computed: boolean;
    //                     shorthand: boolean;
    //                     value: {
    //                         type: string;
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
    //                             identifierName: string;
    //                         };
    //                         name: string;
    //                     };
    //                     extra: {
    //                         shorthand: boolean;
    //                     };
    //                 }
    //             ];
    //         },
    //         {
    //             type: string;
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
    //         }
    //     ];
    //     body: {
    //         type: string;
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
    //         body: any[]; // You can replace `any[]` with the appropriate type for the body
    //         directives: any[]; // You can replace `any[]` with the appropriate type for the directives
    //     };
    // };
}