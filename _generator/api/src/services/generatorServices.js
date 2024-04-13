// npm run add_s -- --name ${name_service}

//$ example:
//$ npm run add_s -- --name auth

const fs = require("fs");
const path = require("path");
const { throwError, catchError } = require("../helpers/customError");
const { clear } = require("console");
const basePath = path.join(__dirname, "..");

const getFilePath = (name = "", type = "js", directory = "modules") => {
  const basePath = path.join(__dirname, "..");
  return basePath + "/" + directory + "/" + name + "." + type;
};

function UpFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function generateFile(name, directory = "", jsCode = "", type = "ts") {
  await catchError((resolve, reject) => {
    const filePath = directory + "/" + name + "." + type;
    console.log(filePath);
    fs.writeFile(filePath, jsCode, function (err) {
      if (err)
        reject([
          "generate_file",
          500,
          "An error occurred while generating the file: " + name,
        ]);
      else resolve();
    });
  }, 1);
}

async function deleteJSFile(name, directory = "") {
  const filePath = directory + "/" + name + ".ts";

  await catchError((resolve, reject) => {
    fs.unlink(filePath, function (err) {
      if (err)
        reject([
          "delete_file",
          500,
          "An error occurred while deleting the file: " + name,
        ]);
      else resolve();
    });
  }, 1);
}

async function addContent(
  startTag,
  lineToAdd,
  filePath,
  returnToExists = false
) {

  // console.log({ startTag, lineToAdd, filePath, })

  await catchError((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject([
          "add_content",
          500,
          "An error occurred while reading the file: " + filePath,
        ]);
        return;
      }

      // Verificar si la línea ya existe en el archivo
      if (data.includes(lineToAdd) && returnToExists) {
        console.log("Error, Reducer was added before.");
        return;
      }

      // Buscar la posición del primer tag
      const startIndex = data.indexOf(startTag);
      if (startIndex === -1) {
        console.error("Start tag not found in the file.");
        return;
      }

      // Insertar la línea después del primer tag
      const insertIndex = startIndex + startTag.length;
      const newContent =
        data.slice(0, insertIndex) + "\n" + lineToAdd + data.slice(insertIndex);

      // Escribir el nuevo contenido en el archivo
      fs.writeFile(filePath, newContent, "utf8", (err) => {
        if (err) {
          console.error("An error occurred while writing to the file:", err);
          reject();
          return;
        }
        resolve();
      });
    });
  });
}

async function deleteContent(startTag, endTag, filePath) {
  // Leer el contenido del archivo
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      // Encontrar la posición del startTag
      const startIndex = data.indexOf(startTag);
      if (startIndex === -1) {
        console.error("Start tag not found in the file.");
        reject();
        return;
      }

      // Encontrar la posición del endTag después del startTag
      const endIndex = data.indexOf(endTag, startIndex + startTag.length);
      if (endIndex === -1) {
        console.error("End tag not found after start tag.");
        reject();
        return;
      }

      // Eliminar el contenido entre startTag y endTag y agregar un espacio adicional entre los tags
      const contentBeforeTags = data.slice(0, startIndex) + startTag + "\n";
      const contentAfterTags = data.slice(endIndex);
      const newContent = contentBeforeTags + contentAfterTags;

      // Escribir el nuevo contenido en el archivo
      fs.writeFile(filePath, newContent, "utf8", (err) => {
        if (err) {
          console.error("An error occurred while writing to the file:", err);
          reject();
          return;
        }
        resolve();
      });
    });
  });
}

async function deleteTagsAndContent(startTag, endTag, filePath, secondEndTag) {
  // Leer el contenido del archivo
  let activeSecondTry = false;
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      // Encontrar la posición del startTag
      const startIndex = data.indexOf(startTag);
      if (startIndex === -1) {
        console.error("Start tag not found in the file.");
        reject();
        return;
      }

      // Encontrar la posición del endTag después del startTag
      const endIndex = data.indexOf(endTag, startIndex + startTag.length);
      if (endIndex === -1) {
        console.error("End tag not found after start tag.");
        reject();
        return;
      }

      // Eliminar el contenido entre startTag y endTag, manteniendo el endTag
      const contentBeforeTags = data.slice(0, startIndex);
      const contentAfterTags = data.slice(endIndex);
      // const contentAfterTags = data.slice(endIndex + endTag.length);
      const newContent = contentBeforeTags + contentAfterTags;

      // Escribir el nuevo contenido en el archivo
      fs.writeFile(filePath, newContent, "utf8", (err) => {
        if (err) {
          console.error("An error occurred while writing to the file:", err);
          reject();
          return;
        }
        activeSecondTry = true;
        resolve();
      });
    });
  });


}

async function getFile(filePath, jsonFormat = false) {
  let getData = await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
      }
      resolve(data);
    });
  }).then((data) => {
    if (!jsonFormat) return JSON.parse(data);
    else return data;
  });

  return getData;
}

async function replaceTag(tagToReplace, newTag, filePath) {
  // Leer el contenido del archivo
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      // Reemplazar todas las ocurrencias del tag antiguo con el nuevo tag
      const newData = data.replace(new RegExp(tagToReplace, "g"), newTag);

      // Escribir el nuevo contenido en el archivo
      fs.writeFile(filePath, newData, "utf8", (err) => {
        if (err) {
          console.error("An error occurred while writing to the file:", err);
          reject();
          return;
        }
        resolve();
      });
    });
  });
}

module.exports = {
  getFilePath,
  generateFile,
  addContent,
  deleteJSFile,
  deleteContent,
  deleteTagsAndContent,
  replaceTag,
  getFile,
};

// const main = async () => {
//   const filePath = getFilePath("veamos");
//   const tagsStart = `//GCI-54`;
//   const tagEnd = `//GCI`;
//   // await deleteContent(
//   //   tagsStart,
//   //   tagEnd,
//   //   filePath,
//   // );

//   const nameC = "users";
//   const typeReq = "Get";

//   // await addContent(
//   //   `//GCI-START`,
//   //   `//GCI-START`,
//   //   `
//   //   //GCI-${parseInt(Math.random()*122)}
//   //   ${nameC}${typeReq}: async (req: I.usersGetReq, res: I.usersGetRes) => { },
//   //   //GCI`,
//   //   filePath,
//   // );

//   // await deleteTagsAndContent(
//   //   `//GCI-30`,
//   //   `//GCI`,
//   //   filePath,
//   // );

//   // await deleteTagsAndContent(
//   //   `//GCI-51`,
//   //   `//GCI`,
//   //   filePath,
//   // );

//   await addContent(
//     tagsStart,
//     tagEnd,
//     `console.log('hello word')`,
//     filePath,
//   );

//   // await replaceTag(
//   //   `userGet:`,
//   //   `productGet:`,
//   //   filePath
//   // );

//   // await replaceTag(
//   //   `userGet:`,
//   //   `productGet:`,
//   //   filePath
//   // );

// }
// main();
