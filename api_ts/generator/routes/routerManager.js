const { getFilePath, generateJSFile, addContent, deleteContent, deleteTagsAndContent, replaceTag } = require('../servicesGenerator');

const compiler = {};

const main = async () => {
    await compiler.creteRouter("user");

};

compiler.creteRouter = async (name) => {

    await generateJSFile(name + "Routes", "generator/routes");
}

compiler.deleteRouter = (name) => {
    const filePath = getFilePath("veamos");
    const tagsStart = `//GCI-54`;
    const tagEnd = `//GCI`;

    deleteContent(
        tagsStart,
        tagEnd,
        filePath,
    );
}


main();

module.exports = compiler;