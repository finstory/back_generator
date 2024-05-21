const path = require("path");

const getDirPath = (dir) => {
  return path.join(__dirname, "..", "..", dir);
};
