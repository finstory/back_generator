const fs = require("fs");
const path = require("path");
const { addServices } = require("../../utils/service/injector");
const { throwError, catchError } = require("../../helpers/customError");

const services = {};
addServices("fs", services);


services.getFile = async (filePath, jsonFormat = true) => {
  const textCode = await catchError((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject([
          "file_system",
          404,
          "File not found"
        ]);
      }
      resolve(data);
    });
  })
    .then((data) => {
      if (!jsonFormat) return JSON.parse(data);
      else return data;
    }, 1);
  return textCode;
}

services.createFile = async (filePath, code = "") => {
  await catchError((resolve, reject) => {
    fs.writeFile(filePath, code, function (err) {
      if (err)
        reject([
          "generate_file",
          500,
          "An error occurred while generating the file: "
        ]);
      else resolve();
    });
  }, 1);
}

services.createFolder = async (folderPath) => {
  await catchError((resolve, reject) => {
    fs.mkdir(folderPath, { recursive: true }, function (err) {
      if (err)
        reject([
          "generate_folder",
          500,
          "An error occurred while generating the folder: "
        ]);
      else resolve();
    });
  }, 1);
}

services.replaceFile = async (filePath, code = "") => {
  await catchError((resolve, reject) => {
    fs.writeFile(filePath, code, function (err) {
      if (err)
        reject([
          "generate_file",
          500,
          "An error occurred while generating the file: "
        ]);
      else resolve();
    });
  }, 1);
}

services.renameFile = async (oldName, newName, directory = "", type = "ts") => {
  const oldFilePath = directory + "/" + oldName + "." + type;
  const newFilePath = directory + "/" + newName + "." + type;

  await catchError((resolve, reject) => {
    fs.rename(oldFilePath, newFilePath, function (err) {
      if (err)
        reject(err);
      else
        resolve();
    });
  }, 1);
}

services.deleteFile = async (filePath) => {

  await catchError((resolve, reject) => {
    fs.unlink(filePath, function (err) {
      if (err)
        reject([
          "delete_file",
          500,
          "An error occurred while deleting the file "
        ]);
      else resolve();
    });
  }, 1);
}

services.deleteFolder = async (folderPath) => {
  await catchError((resolve, reject) => {
    fs.rm(folderPath, { recursive: true }, function (err) {
      if (err)
        reject([
          "delete_folder",
          500,
          "An error occurred while deleting the folder "
        ]);
      else resolve();
    });
  }, 1);
}

module.exports = services;

