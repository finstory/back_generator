import S from "@services";
import { printInfo, printMsg } from "@helpers/wordsManager";
import { delay } from "@helpers/delay";
import JsonDB from "@json_db";
import RouteModel from "@/_common/db/json/entities/route.model";
import { v4 as uuid4 } from 'uuid';


const testMain = async () => {

    try {

        const textCode = `class Params {
        user: ({id:name})[];
        last_name: string;
        };`;

        const getAll = await S.ast.class.getAllProperties(textCode, "Params");
        console.log(getAll);
        // await S.validation.requestParams.addValidation("user", "getUser", { from: "query", name: "user", type: "User" }, { decoratorName: "ValidateNested", decoratorType: "ClassValidator" });

        // await S.validation.requestParams.addValidation("user", "getUser", { from: "query", name: "user", type: "User" }, { decoratorName: "Type", decoratorType: "TypeValidator" });

        // let addDecorator = await S.ast.classDecorator.addDecoratorToProperty(textCode,
        //     { className: "Params", propName: "user", elementType: "" },
        //     { decoratorName: "Length", decoratorType: "ClassValidator", decoratorArguments: ["0", 30] });

        //  addDecorator = await S.ast.class.removeProperty(addDecorator, { className: "Params", propName: "user_id" });
        // console.log(addDecorator);

        // const decorators = await S.ast.class.getDecoratorByProperty(textCode, { className: "Params", propName: "user_id" });

    } catch (error) {
        // console.log(error)
        printMsg(error.message || "error", "error");
    }
};



export default testMain;
