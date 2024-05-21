import { ErrorFormat } from "@/_config/validations/formatErrors";
import { errorsList, typeError } from "./errors-list.response";

export class ErrorResponse extends Error {
  type: string;
  message: string;
  status: number;
  payload: ErrorFormat[];
  stack: any;
  constructor(type: string, message: string, status: number, payload: any) {
    super();
    this.type = type;
    this.status = status;
    this.message = message;
    this.payload = payload;
    Error.captureStackTrace(this, this.stack);
  }

}

const customPayload = (key: string, message?: string, defaultMessage?: string): ErrorFormat[] => [
  {
    parameter: "internal",
    from: null,
    property: key,
    constraints: {
      internal: message ? message : defaultMessage
    }
  }
];


const throwErrorResponse = (type: typeError, key: string, message?: string, status?: number, payload?: ErrorFormat[]) => {

  if (status)
    throw new ErrorResponse(type, message, status, payload ? payload : customPayload(key, message));

  function defaultError(defaultMessage: string, status: number) {

    throw new ErrorResponse(
      type,
      message ? message : defaultMessage,
      status,
      payload ? payload : customPayload(key, message, defaultMessage)
    );
  }

  errorsList(defaultError, type, key);

}


export default throwErrorResponse;
