import S from "@services";
import { printInfo, printMsg } from "@helpers/wordsManager";
import { delay } from "@helpers/delay";
import JsonDB from "@json_db";
import RouteModel from "@/_common/db/json/entities/route.model";
import { v4 as uuid4 } from 'uuid';


const testMain = async () => {

    try {

        const newRoute: RouteModel = {
            id: uuid4(),
            endpointName: "/create",
            requestType: "post",
            description: "Write a description here...",
            controllerName: "postUserCreate",
            middlewares: ["Token", "+"],
            validateActive: true,
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
        
        // await S.package.test();
        // const db = await JsonDB();
        //   await S.endpoint.expressRoute.create("auth", { endpoint: "/all/:id", requestType: "get" });
        // await S.package.test();
        // await S.package.createModule("user");
        //  await db.module.create("auth");
        //  await db.route.create("auth", newRoute);
        // await db.route.edit("auth", "ed0182a1-3eb3-46a4-ab62-a9f1ad649fa9", { endpointName: "/register", requestType: "post", description: "is for register" });
        // await db.route.edit("auth", "13a52111-72b4-4648-ae8b-cb864fd18793", { endpointName: "/register", requestType: "post", description: "is for register" });
        //  await db.route.delete("auth", "ed0182a1-3eb3-46a4-ab62-a9f1ad649fa9");
        // await S.validation.model.createFile("auth", "getEmailUserById");
        // await S.validation.model.removeBarrelExport("auth", "getEmailUserById");
        //  await   S.controller.file.createController("auth", "userGetting");
        // await    S.controller.file.createController("auth", "userGetting2");
        // await S.controller.file.removeController("auth", "userGetting2");
        // const file = await S.controller.file.renameController("auth", "postUserCreate", "siUserCreate");

        // await S.endpoint.create("auth", { endpoint: "/all", requestType: "get" });


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
        // console.log(error)
        printMsg(error.message || "error", "error");
    }
};



export default testMain;
