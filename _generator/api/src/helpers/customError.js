class CustomError extends Error {
  constructor(type, status, payload) {
    super();
    this.type = type;
    this.status = status;
    this.payload = payload;
    Error.captureStackTrace(this, this.constructor);
  }
}

class CatchError extends Error {
  constructor(name) {
    super();
    this.name = name;
    this.wasCatch = true;
    Error.captureStackTrace(this, this.constructor);
  }
}


function throwError(type, status, payload = "Error in request.", checkError = true) {
  if (checkError) throw new CustomError(type, status, payload);
  else return;
}

function catchError(object, condition) {
  const nameCondition = Object.keys(object)[0];
  if (condition) throw new CatchError(nameCondition);
  else return;
}

function checkIsCathError(error) {
  if (error.wasCatch) return;
  else throw error;
}

// function throwError(type, payload, status, checkError = true) {
//   if (checkError) throw new CustomError(type, status, payload);
//   else return;
// }

module.exports = { throwError, catchError, checkIsCathError };
