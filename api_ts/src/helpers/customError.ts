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

function throwError(type: string, status: number, payload: any): never {
  throw new CustomError(type, status, payload);
}

export { throwError, CustomError };
