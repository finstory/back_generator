export class ValidationModel {
    name: string;
    decoratorType: "ClassValidator" | "TransformValidator" | "TypeValidator";
    message?: string;
    callBack?: string;
}