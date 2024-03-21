const { printMsg } = require("./wordsManager");

class CustomError extends Error {
  constructor(type, status, payload) {
    super();
    this.type = type;
    this.status = status;
    this.payload = payload;
    Error.captureStackTrace(this, this.constructor);
  }
}


function throwError(type, status, payload) {
  throw new CustomError(type, status, payload);
}

const catchError = async (callback, timer = 1, msgTimerError) => {
  let setTimer;

  await new Promise((resolve, reject) => {
    callback(resolve, reject);

    setTimer = setTimeout(() => {
      if (msgTimerError) reject(new Error(msgTimerError));
      else reject(new Error("Timeout in process..."));
    }, timer * 1000);

  })
    .then((msg) => { if (msg) console.log(msg); clearTimeout(setTimer); })
    .catch((err) => {
      clearTimeout(setTimer);
      if (err[1] && err[2]) throwError(err[0], err[1], err[2]);
      else throw err;
    })
}

const printError = (error) => {
  if (error.payload)
    printMsg(`${error.payload} (${error.type})`, "error");
  else console.log(error);
}

module.exports = { throwError, catchError, printError };
