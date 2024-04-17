import React from "react";
import { DoubleBorderGradient } from "../../../utilities/DoubleBorderGradient";
import scss from "../../../assets/sass/pages/routes.module.scss";
import { BorderGradient } from "../../../utilities/BorderGradient";
import { EndpointProperties } from "./EndpointProperties";
import { RequestBar } from "./RequestBar";
import { useRequestServices } from "../../../services/useRequestServices";
import { DataManager } from "./DataManager";
import { getPath } from "../../../../helpers/getPath";

export const RequestPanel = () => {
  const {
    request: { route_module_target, endpoint_target },
  } = useRequestServices();

  const openInVSC = () => {
    getPath("controllers");
    const file_path =
      getPath("controllers") + `/${route_module_target}Controllers.ts`;
    window.open(`vscode://file/${file_path}:${lineNumber}:${columnNumber}`);
  };

  return (
    <DoubleBorderGradient
      effectHeight="51rem"
      effect={true}
      className={scss.request_panel}
      borderRadius="2rem"
      borderSize="2px"
      borderBetween="2px"
    >
      <div className={scss.panel}>
        <div className={scss.title}>
          <p>
            <span className={scss[endpoint_target.method]}>
              {route_module_target.toUpperCase()}
            </span>
            {endpoint_target.endpoint.toUpperCase()}
          </p>
        </div>

        <EndpointProperties
          scss={scss}
          item={endpoint_target}
          routeModule={route_module_target}
        />
        <RequestBar scss={scss} />

        <DataManager
          scss={scss}
          item={endpoint_target}
          routeModule={route_module_target}
        />

        <BorderGradient
          className={scss.view_in_vsc}
          borderSize="2px"
          onClick={openInVSC}
        >
          <p>OPEN IN VSC</p>
        </BorderGradient>
      </div>
    </DoubleBorderGradient>
  );
};
