export interface ErrorFormat {
    parameter: "params" | "query" | "body" | "internal";
    from: (string | number)[] | null;
    property: string;
    constraints: { [type: string]: string };
}

export interface PreviewErrorResponse {
    type: string;
    status: number;
    message: string;
    internalMessage: string;
}