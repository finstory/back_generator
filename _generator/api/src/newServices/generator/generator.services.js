
const { addServices, S } = require("../../utils/service/injector");
const { throwError, catchError } = require("../../helpers/customError");
const services = {};
addServices("generator", services);


services.addCodeAfterTag = async ({ filePath, tagName, codeToAdd, addSpace = false }) => {
    let textCode = await S.fs.getFile(filePath);
    const pos = S.ast.getCommentPosition(textCode, tagName);
    textCode = insertCodeAfterPosition(textCode, codeToAdd, pos, addSpace);

    await S.fs.createFile(filePath, textCode);
}

services.removeFunctionProperty = async ({ filePath, compilerName, propName }) => {
    let textCode = await S.fs.getFile(filePath);
    const pos = S.ast.getPosFunctionProperty(textCode, compilerName, propName);

    textCode = removeCodeBetweenPos(textCode, pos);
    await S.fs.createFile(filePath, textCode);
}

services.removeImport = async ({ filePath, importName }) => {
    let textCode = await S.fs.getFile(filePath);
    const pos = S.ast.getPosImport(textCode, importName);

    textCode = removeCodeBetweenPos(textCode, pos,false);
    await S.fs.createFile(filePath, textCode);
};

//% microservices :

const insertCodeAfterPosition = (textCode, codeToAdd, pos, addSpace) => {
    return textCode.slice(0, pos.end) + `\n${codeToAdd}${addSpace ? "\n" : ""}` + textCode.slice(pos.end);

}

const removeCodeBetweenPos = (textCode, pos, removeDownLine = true, removeUpLine = true) => {
    const numUp = removeDownLine ? (- 1) : 0;
    const numDown = removeUpLine ? 1 : 0;
    let codeGetting = textCode.slice(0, pos.start + numUp) + textCode.slice(pos.end + numDown);
    return codeGetting;
}

const main = async () => {

    const path = "D:/Programacion_Extra/Node_ts/_generator/api/src/newServices/generator/index.ts";

    await services.removeImport({ filePath: path, importName: "controller" });
}
main()
