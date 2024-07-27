import { Pos } from "../_interfaces/ast.interface";

export class ClassPropertyDto {
    className: string;
    name: string;
    typeStringified?: string;
    typePosition?: Pos;
    objectType?: string;
    comment?: string;
}

export class PropertyDecoratorDto {
    decoratorName: string;
    decoratorType: "ClassValidator" | "TransformValidator" | "TypeValidator";
    decoratorArguments?: Array<any>;
}