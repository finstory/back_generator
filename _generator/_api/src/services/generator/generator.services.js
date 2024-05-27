
const S = require("../../utils/service/injector");
const { throwError, catchError } = require("../../helpers/customError");
const services = {};
S.add("generator", services);


services.addCodeAfterTag = async (filePath, tagName, codeToAdd, addSpace = false) => {
    try {
        let textCode = await S.fs.getFile(filePath);
        const pos = S.ast.getPosComment(textCode, tagName);
        textCode = insertCodeAfterPosition(textCode, codeToAdd, pos, addSpace);
        await S.fs.createFile(filePath, textCode);
    } catch (error) {
        //  console.log(error)
    }
}

services.renameFunctionProperty = async (filePath, compilerName, propName, newPropName, propsList) => {
    const textCode = await S.fs.getFile(filePath);
    const newTextCode = S.ast.editFunctionProperty(textCode, compilerName, propName, newPropName, propsList);
    await S.fs.createFile(filePath, newTextCode);
}

services.getLineFunctionProperty = async (filePath, compilerName, controllerName) => {
    const textCode = await S.fs.getFile(filePath);

    if (!textCode) throwError("not_found", 404, "File not found");

    const pos = S.ast.getPosFunctionProperty(textCode, compilerName, controllerName);
    const index = textCode.substring(0, pos.start).split('\n').length;
    const right = compilerName.length + 2;

    return { index, right };

}

services.removeFunctionProperty = async (filePath, compilerName, propName) => {
    let textCode = await S.fs.getFile(filePath);
    const pos = S.ast.getPosFunctionProperty(textCode, compilerName, propName);
    textCode = removeCodeBetweenPos(textCode, pos);
    await S.fs.createFile(filePath, textCode);
}

services.renameImport = async (filePath, importName, newImportName, newPathName) => {
    let textCode = await S.fs.getFile(filePath);
    textCode = S.ast.editImport(textCode, importName, newImportName, newPathName);
    await S.fs.createFile(filePath, textCode);
};

services.removeImport = async (filePath, importName) => {
    let textCode = await S.fs.getFile(filePath);
    const pos = S.ast.getPosImport(textCode, importName);

    textCode = removeCodeBetweenPos(textCode, pos, false);
    await S.fs.createFile(filePath, textCode);
};

services.replaceCompiledImport = async (filePath, importName, importList) => {
    let textCode = await S.fs.getFile(filePath);
    const newTextCode = S.ast.replaceCompilerBody(textCode, importName, importList);
    await S.fs.createFile(filePath, newTextCode);
};

services.renameClassMethod = async (filePath, className, methodName, newMethodName, argsList) => {
    let textCode = await S.fs.getFile(filePath);
    const newTextCode = S.ast.editClassMethod(textCode, className, methodName, newMethodName, argsList);
    await S.fs.createFile(filePath, newTextCode);
}

services.removeClassMethod = async (filePath, className, methodName) => {
    let textCode = await S.fs.getFile(filePath);
    const pos = S.ast.getPosClassMethod(textCode, className, methodName);
    textCode = removeCodeBetweenPos(textCode, pos, false, true);
    await S.fs.createFile(filePath, textCode);
}


//% TYPES :

services.addType = async (filePath, typeName, newType = { prevKey, key, type, elementType, optional, value }) => {
    let textCode = await S.fs.getFile(filePath);
    const newTextCode = S.ast.addTypes(textCode, typeName, newType);

    await S.fs.createFile(filePath, newTextCode);
}

services.renameType = async (filePath, typeName, newType = { prevKey, key, type, elementType, optional, value }) => {
    let textCode = await S.fs.getFile(filePath);
    const newTextCode = S.ast.editTypes(textCode, typeName, newType);
    await S.fs.createFile(filePath, newTextCode);
}

services.removeType = async (filePath, typeName, key) => {
    let textCode = await S.fs.getFile(filePath);
    const pos = S.ast.getPosTypes(textCode, typeName, key);

    textCode = removeCodeBetweenPos(textCode, pos, false, false);
    await S.fs.createFile(filePath, textCode);
}



//% microservices :

const insertCodeAfterPosition = (textCode, codeToAdd, pos, addSpace) => {
    return textCode.slice(0, pos.end) + `\n${codeToAdd}${addSpace ? "\n" : ""}` + textCode.slice(pos.end);

}

const removeCodeBetweenPos = (textCode, pos, removeDownLine = true, removeUpLine = true) => {
    let numUp = removeDownLine ? (- 1) : 0;
    // if (typeof numUp === "number") numUp = removeDownLine;
    const numDown = removeUpLine ? 1 : 0;
    let codeGetting = textCode.slice(0, pos.start + numUp) + textCode.slice(pos.end + numDown);
    return codeGetting;
}

const main = async () => {

    const path = "D:/Programacion_Extra/Node_ts/_generator/api/src/newServices/generator/index.ts";
    // await services.renameFunctionProperty(path, "controller", "getUser", "post");

    // await services.renameClassMethod(path, "Controllers", "getAuth", "putName");

    // await services.removeClassMethod(path, "Controllers", "getAuth");
    // await services.replaceCompiledImport({ filePath: path, importName: "controllers", importList: ["controller"] })
    // await services.removeImport({ filePath: path, importName: "service" });
}
main()