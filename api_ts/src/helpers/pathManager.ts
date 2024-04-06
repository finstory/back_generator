import path from "path";
const fs = require("fs");

const getAbsolutePath = (relativePath: string) => {
  return path.resolve(__dirname, relativePath);
};

export const createAllPaths = () => {
  const dataPath = getAbsolutePath("../../data/paths.json");
  console.log(dataPath);
  const paths = [
    {
      src: getAbsolutePath("../../src"),
    },
  ];

  fs.writeFile(dataPath, JSON.stringify(paths), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
