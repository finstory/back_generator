import { ValidationModel } from "./validation.model";

class RequestParamsModel {
    name: string;
    type: string;
    optional: boolean;
    containType?: string;
    value?: any;
    validations?: ValidationModel[];

    constructor(name: string, type: string, containType: string, optional: boolean, value: any, validations?: ValidationModel[]) {
        this.name = name;
        this.type = type;
        this.containType = containType;
        this.optional = optional;
        this.value = value;
        this.validations = validations;
    }
}


export default RequestParamsModel;