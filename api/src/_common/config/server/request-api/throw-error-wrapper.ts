import { Mark } from "@config/errors/utils/stack-filter";
import sendError from "./send-error";
import dotenv from 'dotenv';
import { printMsg } from "@/_common/helpers/wordsManager";
dotenv.config();

const errorWrapper = (fn: any) => async (req: any, res: any) => {
    try {
        await fn(req, res);
    } catch (error) {

        if (error?.name !== "ErrorResponse") {
            let errorName = error?.name ? error?.name.replace(/([A-Z])/g, ' $1').toUpperCase().trim() : "ERROR";
            
            printMsg(`[${errorName ? errorName : "ERROR"}] ${error.message ? error?.message : "error"}`, "error");
        }

        sendError(res, error);
        if (process.env.PRINT_THROW_ERRORS_RESPONSE === 'true') {
            Mark(error.stack);
        }
    }
};

export default errorWrapper;
