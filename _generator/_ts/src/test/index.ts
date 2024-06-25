import S from "@services";
import { printInfo, printMsg } from "@helpers/wordsManager";
import { delay } from "@helpers/delay";
import JsonDB from "@json_db";
import RouteModel from "@/_common/db/json/entities/route.model";
import { v4 as uuid4 } from 'uuid';
import throwError from "@config/errors/throw-error";


const testMain = async () => {

    try {

        const newRoute: RouteModel = {
            id: uuid4(),
            endpointName: "/create",
            requestType: "post",
            description: "Write a description here...",
            controllerName: "postUserCreate",
            middlewares: ["Token", "+"],
            params: [],
            query: [
                {
                    key: "id",
                    type: "UUID",
                    elementType: "",
                    optional: true,
                    value: "ER334WE"
                }
            ],
            body: [
                {
                    key: "id",
                    type: "UUID",
                    elementType: "",
                    optional: true,
                    value: "ER334WE"
                },
                {
                    key: "first_name",
                    type: "string",
                    elementType: "facundo",
                    optional: true,
                    value: null
                },
                {
                    key: "password",
                    type: "string",
                    elementType: "",
                    optional: true,
                    value: "2329Icx/"
                },
                {
                    key: "age",
                    type: "number",
                    elementType: "",
                    optional: false,
                    value: "32"
                }
            ],
            responseBody: []
        };

        throwError("GENERATOR", "not_found", "user");
    } catch (error) {

        // printMsg(error.message || "error", "error");
    }
};



export default testMain;
