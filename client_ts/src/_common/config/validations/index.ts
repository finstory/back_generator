import { plainToClass, plainToClassFromExist } from "class-transformer";
import * as V from "class-validator";
import formatErrors, { ErrorFormat } from "./format-errors";



 const classValidator = async (BaseClass: any, comparisonObject: any) => {

    const checkClass = await V.validate(plainToClass(BaseClass, comparisonObject));
    if (checkClass.length > 0) {
        const formattedErrors: ErrorFormat[] = formatErrors(checkClass, 'params')
        return formattedErrors;
    } else {
        return [];
    }

}


export default classValidator;