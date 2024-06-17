import S from "@services";
import { User } from "./../app/user/_dtos/user.dto";
import { printInfo, printMsg } from "@/_common/helpers/wordsManager";
import { delay } from "@helpers/delay";


const testMain = async () => {

    try {
        
        // await S.validation.model.createFile("auth", "getEmailUserById");
        await S.validation.model.addBarrelExport("auth", "getEmailUserById");
        // await S.validation.model.removeBarrelExport("auth", "getEmailUserById");
        //  await   S.controller.file.createController("auth", "userGetting");
        // await    S.controller.file.createController("auth", "userGetting2");
        // await S.controller.file.removeController("auth", "userGetting2");
        // const file = await S.controller.file.renameController("auth", "postUserCreate", "siUserCreate");

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



export default testMain;
