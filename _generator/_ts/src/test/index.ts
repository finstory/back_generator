import S from "@services";
import { User } from "./../app/user/_dtos/user.dto";
import validateModule from "@/_common/config/validations/validateModule";
import { formatCode } from "@/_common/utils/_index";
import { printInfo, printMsg } from "@/_common/helpers/wordsManager";
import { keepObjRef } from "@/_common/modules/ast/_utils/keep-ref.util";

interface MyObject {
    property: string;
}
const testMain = async () => {

    try {
        const filePath = "d:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app/auth/_routes/auth.route.ts";

        // await S.endpoint.createEndpoint("user", "/all", "get");

        await S.generator.routeFunction.test();

        //  await S.generator.routeFunction.remove(filePath, { endpoint: "/all", requestType: "get" });
        // await S.generator.routeFunction.test();
        // await S.generator.routeFunction.edit(
        //     filePath, {
        //     endpoint: "/all",
        //     requestType: "get",
        //     validateActive: true
        // }, {
        //     newEndpoint: "/other",
        //     newRequestType: "post",
        //     newController: "userController"
        // });

        // const fileGetting = await S.fs.file.getFile(filePath);
        // // let file = S.ast.route_function.removeRoute(textCode,
        // //     { endpoint: "/all", requestType: "get" });
        // let file = await S.ast.route_function.removeRoute(fileGetting, { endpoint: "/other", requestType: "get" });

        // await S.fs.file.createFile(filePath, file);
        // let file2 = await S.ast.route_function.removeRoute(file, { endpoint: "/all", requestType: "get" });

        // const vali = S.ast.route_functions.switchValidation(textCode,
        //     {
        //         endpoint: "/all",
        //         requestType: "get",
        //         validateActive: true
        //     });
        // console.log(vali);
    } catch (error) {
        printMsg(error.message || "error", "error");
    }
};

class Users {
    name: string;
    age: number;
    isShort: boolean;
}

export default testMain;
