import { DoubleBorderGradient } from "../utilities/DoubleBorderGradient";
import { useEffect, useState } from "react";
import { BorderGradient } from "../utilities/BorderGradient";
import useRouteServices from "../services/useRouteServices";

export const Dashboard = () => {
  const handleOpenFileInVSCode = () => {
    const filePath = "/D:/Programacion_Extra/Node_ts/client/src/pages/hello.js";
    window.open(`vscode://file${filePath}`, "_blank");
  };

  return (
    <div className="main_container">
      <button onClick={handleOpenFileInVSCode}>
        Abrir archivo en Visual Studio Code
      </button>
    </div>
  );
};
