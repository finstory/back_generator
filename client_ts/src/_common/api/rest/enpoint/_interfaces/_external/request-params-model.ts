class RequestParamsModel {
    key: string;
    type: string;
    elementType: string;
    optional: boolean;
    value: any;

    constructor({ key, type, elementType, optional, value }) {
        this.key = key;
        this.type = type;
        this.elementType = elementType;
        this.optional = optional;
        this.value = value;
    }
}

export default RequestParamsModel;