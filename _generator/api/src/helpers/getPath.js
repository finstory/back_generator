const getPath = (path, additional = "") => {
  switch (path) {
    case "routes":
      return "D:/Programacion_Extra/Node_ts/api_ts/src/routes" + additional;
    case "controllers":
      return "D:/Programacion_Extra/Node_ts/api_ts/src/controllers" + additional;
    case "interfaces":
      return "D:/Programacion_Extra/Node_ts/api_ts/src/interfaces" + additional;
    case "services":
      return "D:/Programacion_Extra/Node_ts/api_ts/src/services" + additional;
    case "data":
      return "D:/Programacion_Extra/Node_ts/api_ts/data" + additional;
  }
};

module.exports = getPath;
