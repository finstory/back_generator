import React from "react";
import { useManagerText } from "../../../hooks/useManagerText";
import { getPath } from "../../../../helpers/getPath";
import useRouteServices from "../../../services/useRouteServices";

export const EndpointProperties = ({ scss, item, routeModule }) => {
  const { firsUpperCase } = useManagerText();
  const { getControllerIndex } = useRouteServices();
  const openInVSC = async () => {
    const { index, right } = await getControllerIndex(
      routeModule,
      item.controllerName
    );
    const file_path = getPath("controllers") + `/${routeModule}Controllers.ts`;
    console.log({ index, right });
    window.open(`vscode://file/${file_path}:${index}:${right}`);
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
