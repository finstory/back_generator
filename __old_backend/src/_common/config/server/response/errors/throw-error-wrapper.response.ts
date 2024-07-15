import { Mark } from "@config/errors/stack-filter.error";
import sendError from "./send-error.response";
import dotenv from 'dotenv';
dotenv.config();

const errorWrapper = (fn: any) => async (req: any, res: any) => {
    try {
        await fn(req, res);
    } catch (error) {
        sendError(res, error);
        if (process.env.PRINT_THROW_ERRORS_RESPONSE === 'true') {
            Mark(error.stack);
        }
    }
};

export default errorWrapper;
