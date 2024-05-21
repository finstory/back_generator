import { Response } from "express";
import { ErrorFormat } from "./formatErrors";
import colors from "colors";
import dotenv from 'dotenv';
dotenv.config();

export interface ErrorResponse {
    type: string;
    message: string;
    payload: ErrorFormat[];
}
const errorsResponse = <BR>(res: Response<BR | ErrorResponse>, formattedErrors: ErrorFormat[]) => {

    if (process.env.PRINT_BAD_REQUEST === 'true') {
        console.error(colors.bgRed.italic(`ERROR THROWN FOR BAD REQUEST`));
        console.error(colors.red.italic(` ${JSON.stringify(formattedErrors, null, 3)}`));
    }

    res.status(400).json({
        type: "bad_request",
        message: "Errors in Request Parameters.",
        payload: formattedErrors
    });
}
export default errorsResponse;