import { ValidationModel } from "@/_common/db/json/entities/validation.model";
import { RequestType } from "@interfaces";

export class ValidatorOptionDto implements ValidationModel {
    name: string;
    decoratorType: "ClassValidator" | "TransformValidator" | "TypeValidator";
    message?: string;
    callBack?: string;
}