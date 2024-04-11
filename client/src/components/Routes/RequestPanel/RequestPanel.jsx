import React from "react";
import { DoubleBorderGradient } from "../../../utilities/DoubleBorderGradient";
import scss from "../../../assets/sass/pages/routes.module.scss";
import { BorderGradient } from "../../../utilities/BorderGradient";
import { EndpointProperties } from "./EndpointProperties";
import { RequestBar } from "./RequestBar";
import { useRequestServices } from "../../../services/useRequestServices";
import { DataManager } from "./DataManager";

export const RequestPanel = () => {
  const {
    request: { endpoint_target },
  } = useRequestServices();
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
          <p>{endpoint_target.endpoint.toUpperCase()}</p>
        </div>

        <EndpointProperties scss={scss} item={endpoint_target} />
        <RequestBar scss={scss} />

        <DataManager scss={scss} />

        <BorderGradient
          className={scss.view_in_vsc}
          borderSize="2px"
          onClick={() => {}}
        >
          <p>VIEW EN VSC</p>
        </BorderGradient>
      </div>
    </DoubleBorderGradient>
  );
};
