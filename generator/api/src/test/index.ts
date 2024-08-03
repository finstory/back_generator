import S from "@services";
import { printInfo, printMsg } from "@helpers/wordsManager";
import { delay } from "@helpers/delay";
import JsonDB from "@json_db";
import RouteModel from "@/_common/db/json/entities/route.model";
import { v4 as uuid4 } from 'uuid';
import fs from 'fs';
import newRedux from "./new-redux/store";
import newReduxTypes from "./new-redux/types";
import nameMain from "./new-redux/getName";

const testMain = async () => {

    try {
        nameMain();
        // newReduxTypes();
        // newRedux();


    } catch (error) {

        printMsg(error.message || "error", "error");
    }
};



export default testMain;
