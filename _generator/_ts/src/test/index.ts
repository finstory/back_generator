import { filterAndViewStackTrace } from "@/_config/errors/stack-filter.error";
import S from "@services";

const testMain = async () => {
    try {
        const filePath = "d:/Programacion_Extra/Node_ts/_generator/_ts/src/_microservices/generator/features/fs/test/facu.ts";
        // const file = await S.generator.fs.getFile(filePath)
        // const file = await S.generator.fs.createFolder(filePath);
         const file = await S.generator.fs.deleteFile(filePath);
        // console.log(file);
    } catch (error) {
        console.error(error.type);
        console.error(error.message);
    }
};

export default testMain;
