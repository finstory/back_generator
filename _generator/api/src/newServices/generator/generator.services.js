
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



//% microservices :

const insertCodeAfterPosition = (textCode, codeToAdd, pos, addSpace) => {
    return textCode.slice(0, pos.end) + `\n${codeToAdd}${addSpace ? "\n" : ""}` + textCode.slice(pos.end);

}

const main = async () => {
    const options = {
        filePath: "D:/Programacion_Extra/Node_ts/_generator/api/src/test.ts",
        tagName: 'ADD',
        codeToAdd: 'codigo',
        addSpace: false
    };
    services.addCodeAfterTag(options);
}
main()
