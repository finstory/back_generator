import React from "react";
import { useManagerText } from "../../../hooks/useManagerText";
import { getPath } from "../../../../helpers/getPath";

export const EndpointProperties = ({ scss, item, routeModule }) => {
  const { firsUpperCase } = useManagerText();

  const openInVSC = () => {
    const file_path =
      getPath("controllers") + `/${routeModule}Controllers.ts`;
    window.open(`vscode://file/${file_path}:${10}:${10}`);
  };

  return (
    <div className={scss.props_list}>
      <button className={`${scss.prop} ${scss[item.method]}`}>
        <p>{firsUpperCase(item.method)}</p>
      </button>

      <button className={`${scss.prop} ${scss.controller}`} onClick={openInVSC}>
        <p>{firsUpperCase(item.controllerName || "/")}</p>
      </button>

      <button className={`${scss.prop} ${scss.middleware}`}>
        <p>{firsUpperCase(item.middlewares[0])}</p>
      </button>

      <button className={`${scss.prop} ${scss.middleware}`}>
        <p>{firsUpperCase(item.middlewares[1])}</p>
      </button>
      <div className={scss.description}>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
