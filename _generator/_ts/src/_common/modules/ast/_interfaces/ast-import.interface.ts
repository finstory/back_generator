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

