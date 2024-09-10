import { ErrorResponseType } from "@config/errors/interfaces/error-response.interface";
import throwError from "@throw_error";
import dotenv from "dotenv";

dotenv.config();
const showSuccessMsg = process.env.PRINT_SUCCESS_MSG_IN_PROMISE_WRAPPER === "true";

type callback = (resolve: (value?: any) => void, reject: (reason?: { type: ErrorResponseType, key: string }) => void) => void;

const promise = async <T>(
    callback: callback,
    msgSuccess?: string,
    timer: number = 2,
): Promise<T | void> => {

    let setTimer: NodeJS.Timeout;

    return await new Promise<T>((resolve, reject) => {

        callback(resolve, reject);

        setTimer = setTimeout(() => {
            reject("timeout");
        }, timer * 1000);

    })
        .then((result) => {
            clearTimeout(setTimer);
            if (showSuccessMsg) msgSuccess && console.log(msgSuccess);
            if (result) return result;
        })
        .catch((err) => {
            clearTimeout(setTimer);
            if (err === "timeout") throwError("PROMISE", "request_timeout", "promise_wrapper");
            else throwError("PROMISE", err.type, err.key)
        })
}

export default promise;