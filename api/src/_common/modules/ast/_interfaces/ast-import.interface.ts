export interface AstImportDeclaration {
    specifiers: Array<{
        type: string;
        start: number;
        end: number;
        loc: {
            start: {
                line: number;
                column: number;
            };
            end: {
                line: number;
                column: number;
            };
        };
        range: [number, number];
        imported: {
            type: string;
            start: number;
            end: number;
            loc: {
                start: {
                    line: number;
                    column: number;
                };
                end: {
                    line: number;
                    column: number;
                };
            };
            range: [number, number];
            name: string;
        };
        local: {
            type: string;
            start: number;
            end: number;
            loc: {
                start: {
                    line: number;
                    column: number;
                };
                end: {
                    line: number;
                    column: number;
                };
            };
            range: [number, number];
            name: string;
        };
    }>;
    source: {
        value: string;
    };
}

export interface AstExportDeclaration {
    type: "ExportAllDeclaration";
    start: number;
    end: number;
    loc: {
        start: {
            line: number;
            column: number;
        };
        end: {
            line: number;
            column: number;
        };
    };
    range: [number, number];
    source: {
        type: string;
        start: number;
        end: number;
        loc: {
            start: {
                line: number;
                column: number;
            };
            end: {
                line: number;
                column: number;
            };
        };
        range: [number, number];
        value: string;
        raw: string;
    };
    exported: {
        type: string;
        start: number;
        end: number;
        loc: {
            start: {
                line: number;
                column: number;
            };
            end: {
                line: number;
                column: number;
            };
        };
        range: [number, number];
        name: string;
    };
}
