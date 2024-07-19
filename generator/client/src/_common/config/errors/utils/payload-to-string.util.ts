import { Axios, AxiosError, AxiosResponse } from "axios";
import classValidator from "../../validations";
// import { ErrorFormat } from "../interfaces/error-format.interface";
import ErrorResponse from "../models/error-response";

interface ErrorFormat {
    parameter: "params" | "query" | "body" | "internal" | "axios_request";
    from: (string | number)[] | null;
    property: string;
    constraints: { [type: string]: string };
}

const payloadToString = (error: ErrorResponse | AxiosError<ErrorResponse>): string => {
    let payload: ErrorFormat[];
    const axiosPayload: ErrorFormat[] = (error as AxiosError<ErrorResponse>).response?.data.payload || [];
    const payloadResponse: ErrorFormat[] = (error as ErrorResponse).payload;

    payload = axiosPayload.length > 0 ? axiosPayload : payloadResponse;

    let message = error.message || "Unknown Error In Client.";
    if (payload && payload.length > 0) {
        message = "";
        payload.forEach((error) => {
            Object.keys(error.constraints).forEach((key) => {
                message += `${error.constraints[key]}\n`;
            });
            message += "\n";
        });
    }
    return message;
};

export default payloadToString;