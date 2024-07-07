import classValidator from "../../validations";
import { ErrorFormat } from "../interfaces/error-format.interface";
import ErrorResponse from "../models/error-response";


const checkParams = async (paramsRequest: any, classDto: any) => {
    const payload: ErrorFormat[] = await classValidator(classDto, paramsRequest);
    if (payload.length > 0) throw new ErrorResponse("bad_request", "Bad request", 400, payload);
};

export default checkParams;