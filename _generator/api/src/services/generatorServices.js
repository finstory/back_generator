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

async function generateFile(name, directory = "", code = "", type = "ts") {
  await catchError((resolve, reject) => {
    const filePath = directory + "/" + name + "." + type;

    fs.writeFile(filePath, code, function (err) {
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
//funcion que edita todo el contentido entre las tags start y end, pero no las elimina, solo edita lo que hay entre medio:
async function editContentBetweenTags(startTag, endTag, newContent, filePath) {
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }

      // Find the position of the startTag
      const startIndex = data.indexOf(startTag);
      if (startIndex === -1) {
        return reject(new Error(`Start tag not found: ${startTag}`));
      }

      // Find the position of the endTag after the startTag
      const endIndex = data.indexOf(endTag, startIndex + startTag.length);
      if (endIndex === -1) {
        return reject(new Error(`End tag not found: ${endTag}`));
      }

      // Replace the content between startTag and endTag
      const contentBeforeTags = data.slice(0, startIndex + startTag.length);
      const contentAfterTags = data.slice(endIndex);
      const updatedContent = contentBeforeTags + "\n" + newContent + contentAfterTags;

      // Write the new content to the file
      fs.writeFile(filePath, updatedContent, "utf8", (err) => {
        if (err) {
          return reject(err);
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

async function findLineInText(textToSearch, filePath) {
  const lineGetting = await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      let result;
      const lines = data.split('\n');

      for (let index = 0; index < lines.length; index++) {

        if (lines[index].includes(textToSearch)) {
          result = { lineIndex: index + 1 };
          break;
        }
      }
      resolve(result);
    });
  });
  return lineGetting;
}

async function findLinesWithTexts(textList = [], filePath) {
  const linesWithTexts = await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      const linesMatch = [];
      const lines = data.split('\n');

      textList.forEach((item) => {
        for (let index = 0; index < lines.length; index++) {

          if (lines[index].includes(item.text)) {
            linesMatch.push({ id: item.id, lineIndex: index + 1 });
            break;
          }

        }
      }
      );

      resolve(linesMatch);
    });
  });
  return linesWithTexts;
}

async function addContentAboveLine(startTag, lineToAdd, filePath) {
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

      // Insertar la línea antes del primer tag
      const insertIndex = startIndex;
      const newContent =
        data.slice(0, insertIndex) + lineToAdd + "\n" + data.slice(insertIndex);

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

async function removeLineByTag(tag, filePath, deleteSpace = true) {
  // Leer el contenido del archivo
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      // Encontrar la posición del tag
      const startIndex = data.indexOf(tag);
      if (startIndex === -1) {
        console.error("Tag not found in the file.");
        reject();
        return;
      }

      // Encontrar la posición del final de la línea
      let endIndex = data.indexOf("\n", startIndex);
      if (endIndex === -1) {
        console.error("End of line not found after tag.");
        reject();
        return;
      }

      // Eliminar la línea y el espacio en blanco que queda
      const contentBeforeTag = data.slice(0, startIndex + (deleteSpace ? -1 : 0));
      const contentAfterTag = data.slice(endIndex + 1);
      const newContent = contentBeforeTag + contentAfterTag;

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

async function replaceTagByLine(tag, lineCode, filePath) {
  // Leer el contenido del archivo
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      // Encontrar la posición del tag
      const startIndex = data.indexOf(tag);
      if (startIndex === -1) {
        console.error("Tag not found in the file.");
        reject();
        return;
      }

      // Encontrar la posición del final de la línea
      let endIndex = data.indexOf("\n", startIndex);
      if (endIndex === -1) {
        console.error("End of line not found after tag.");
        reject();
        return;
      }

      // Eliminar la línea y el espacio en blanco que queda
      const contentBeforeTag = data.slice(0, startIndex);
      const contentAfterTag = data.slice(endIndex + 1);
      const newContent = contentBeforeTag + `${lineCode}\n` + contentAfterTag;

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

async function removeLinesByTagsList(tagsList, filePath) {
  // Leer el contenido del archivo
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the file:", err);
        reject();
        return;
      }

      // Eliminar todas las líneas que contienen los tags de la lista
      let newContent = data;
      tagsList.forEach((tag) => {
        const lines = newContent.split('\n');
        newContent = lines.filter(line => !line.includes(tag)).join('\n');
      });
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


module.exports = {
  getFilePath,
  generateFile,
  removeLineByTag,
  addContent,
  editContentBetweenTags,
  deleteJSFile,
  deleteContent,
  deleteTagsAndContent,
  replaceTag,
  replaceTagByLine,
  getFile,
  findLinesWithTexts,
  findLineInText,
  addContentAboveLine,
  removeLinesByTagsList
};

const main = async () => {
  const lineToAdd = `//Get - /users/:id`
  const path = "D:/Programacion_Extra/Node_ts/_generator/api/src/services/authControllers.ts";
  await addContentAboveLine("controller.putAuthProduct", lineToAdd, path);
  0
  const tagsListToDelete = [
    "//Get",
    "//Post",
    "//Put",
    "//Patch",
    "//Delete",
  ]

  await removeLinesByTagsList(tagsListToDelete, path);
  await addContentAboveLine("controller.putAuthProduct", lineToAdd, path);



}

// main();
