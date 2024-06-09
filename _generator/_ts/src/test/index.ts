import S from "@services";
import { User } from "./../app/user/_dtos/user.dto";
import validateModule from "@/_common/config/validations/validateModule";
import { formatCode } from "@/_common/utils/_index";
import { printInfo, printMsg } from "@/_common/helpers/wordsManager";
import { keepObjRef } from "@/_common/modules/ast/_utils/keep-ref.util";
import { delay } from "@helpers/delay";


interface MyObject {
    property: string;
}


const testMain = async () => {

    try {
        const filePath = "d:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app/auth/auth.controller.ts";

        // const file = await S.controller.file.renameController("auth", "postUserCreate", "siUserCreate");

        await S.controller.file.removeController("auth", "postUserCreate");
        // await S.endpoint.create("auth", { endpoint: "/all", requestType: "get" });

        // await delay(5000);
        // await S.endpoint.edit("auth", {
        //     endpoint: "/all",
        //     requestType: "get",
        //     validateActive: false
        // }, {
        //     newEndpoint: "/other",
        //     newRequestType: "post",
        //     newController: "myController"
        // });

        // await delay(5000);

        // await S.endpoint.remove("auth", { endpoint: "/other", requestType: "post" });


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
