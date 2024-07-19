import { isNumeric } from "validator";
import * as V from "class-validator";

export interface ErrorFormat {
    parameter: "params" | "query" | "body" | "internal";
    from: (string | number)[] | null;
    property: string;
    constraints: { [type: string]: string };
}

function formatErrors(errors: V.ValidationError[], parameter: ErrorFormat["parameter"]): ErrorFormat[] {
    const result: ErrorFormat[] = [];

    function traverse(errors: V.ValidationError[], path: (string | number)[] = []) {
        errors.forEach(error => {
            const currentPath = [...path];
            if (error.constraints) {
                result.push({
                    parameter,
                    from: currentPath.length > 0 ? currentPath : null,
                    property: error.property,
                    constraints: error.constraints,
                });
            }
            if (error.children && error.children.length) {
                const errorProperty = isNumeric(error.property) ? Number(error.property) : error.property;
                traverse(error.children, [...currentPath, errorProperty]);
            }
        });
    }

    traverse(errors);
    return result;
}

export default formatErrors;