import { RequestType } from "../endpoint.interface";

export interface RouteExpressAst {
    type: "CallExpression";
    callee: {
        type: "MemberExpression";
        object: {
            type: "Identifier";
            name: "router";
        }
        property: {
            type: "Identifier";
            name: RequestType;
        }
    }

    arguments: RouteArgumentInterface[];
    optional: false;
}

export interface RouteArgumentInterface {
    type: "StringLiteral" | "MemberExpression";
    value?: string;
    raw?: string;
    object?: {
        type: "Identifier";
        name: "validation" | "controller";
    }
    property?: {
        type: "Identifier";
        name: string;
    }
    optional: false;
}
