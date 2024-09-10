import { RequestType } from "@interfaces";

export interface AstRouteExpress {
    type: "CallExpression";
    callee: {
        type: "MemberExpression";
        object: {
            type: "Identifier";
            name: "router";
        }
        property: {
            type: "Identifier";
            name: string;
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
        name: "validation" | "controller" | "middleware";
    }
    property?: {
        type: "Identifier";
        name: string;
    }
    optional: false;
}