class CustomError extends Error {
  type: string;
  status: number;
  payload: any;

  constructor(type: string, status: number, payload: any) {
    super();
    this.type = type;
    this.status = status;
    this.payload = payload;
    Error.captureStackTrace(this, this.constructor);
  }
}

type typeError = "bad_request" | "not_found";

function throwError(type: typeError, payload?: any, status?: number) {
  if (status) throw new CustomError(type, status, payload);
  if (type === "bad_request") throw new CustomError(type, 400, payload ? payload : "Bad Request");
  if (type === "not_found") throw new CustomError(type, 404, payload ? payload : "Not Found");
}

export { throwError, CustomError };
