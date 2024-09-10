import { ServiceType } from "@services";
import { PreviewErrorResponse } from "../interfaces/error-format.interface";
import { ErrorResponseType } from "../interfaces/error-response.interface";

import { astResponseMockup } from "./ast-errors.mockup";
import { fsResponseMockup } from "./fs-errors.mockup";
import { standardResponseMockup } from "./standard-errors.mockup"

const responseMockup = (type: ErrorResponseType, serviceType, key: string): PreviewErrorResponse => {
    let errorResponse: PreviewErrorResponse;

    errorResponse ||= standardResponseMockup(type, serviceType, key);
    errorResponse ||= fsResponseMockup(type, key);
    errorResponse ||= astResponseMockup(type, key);
    return errorResponse;
}
export default responseMockup;