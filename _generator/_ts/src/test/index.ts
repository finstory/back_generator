import S from "@services";
import { User } from './../app/user/_dtos/user.dto';
import validateModule from "@/_common/config/validations/validateModule";

const testMain = async () => {
    try {

        // const filePath = "d:/Programacion_Extra/Node_ts/_generator/_ts/src/_common/modules/ast/file.ts";
        const textCode = `router.get('/all', controller.getUser);`;

        const file = S.ast.route_functions.renameEndpoint(textCode,
            { endpoint: "/all", requestType: "get" },
            "/allUsers");

        const file2 = S.ast.route_functions.renameController(textCode, { endpoint: "/all", requestType: "get" }, "otherController");

        // const vali = S.ast.router_functions.switchValidation(textCode,
        //     {
        //         endpoint: "/all",
        //         requestType: "get",
        //         controllerName: "otherController",
        //         validateActive: true
        //     });
        // console.log(vali);
        // await S.package.createModule("auth");
        //  await S.endpoint.createEndpoint("auth", "/ok", "delete");
        //  await S.endpoint.createEndpoint("auth", "/", "get");
        //  await S.endpoint.createEndpoint("auth", "/email/profile", "get");
        // const file = await S.generator.fs.getFile(filePath)
        // const files = await S.generator.fs.createFolder(filePath);
        // const file = await S.generator.fs.deleteFolder(filePath);


    } catch (error) {
        // console.error(error.type);
        console.error(error.message);
    }
};


class Users {
    name: string;
    age: number;
    isShort: boolean;
}


export default testMain;
