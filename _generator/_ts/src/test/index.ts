import S from "@services";

const testMain = async () => {
    try {

        const filePath = "d:/Programacion_Extra/Node_ts/_generator/_ts/src/_common/modules/ast/file.ts";
        const code = await S.fs.files.getFile(filePath);
   
        // const file = await S.generator.fs.getFile(filePath)
        // const files = await S.generator.fs.createFolder(filePath);
        // const file = await S.generator.fs.deleteFolder(filePath);


    } catch (error) {
        // console.error(error.type);
        console.error(error.message);
    }
};

export default testMain;
