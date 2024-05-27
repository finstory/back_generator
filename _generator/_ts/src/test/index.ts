import S from "@services";
import { User } from './../app/user/_dtos/user.dto';

const testMain = async () => {
    try {

        const filePath = "d:/Programacion_Extra/Node_ts/_generator/_ts/src/_common/modules/ast/file.ts";
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
