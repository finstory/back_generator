import classValidator from "..";
import ErrorResponse from "../../errors/models/error-response";
import { ErrorFormat } from "../format-errors";

export const checkParams = async (paramsRequest: any, classDto: any) => {
    const payload: ErrorFormat[] = await classValidator(classDto, paramsRequest);
    if (payload.length > 0) throw new ErrorResponse("bad_request", "Bad request", 400, payload);
};