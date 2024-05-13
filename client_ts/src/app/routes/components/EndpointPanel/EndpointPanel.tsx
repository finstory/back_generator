import { useState } from "react";
import { Text, IText, DGBorder, Button, IDGBorder } from "@/components";
import scss from "@routes/_scss/endpoint_panel.module.scss";

import { Title } from "./Title/_Title";
import { EndpointDir } from "./EndpointDir/_EndpointDir";


export const EndpointPanel = () => {

  const props = childrenProps({});

  return (
    <DGBorder className={scss.endpoint_panel} {...props.endpoint_panel} >

      <div className={scss.panel}>
        <Title _scss={scss} />
        <EndpointDir _scss={scss} />
      </div>
    </DGBorder>
  )
};

const childrenProps = ({ }) => new class {

  endpoint_panel: IDGBorder = {
    effectHeight: "51rem",
    effect: true,
    borderRadius: "2rem",
    borderSize: "2px",
    borderBetween: "3px",
  };

  route_module_editor = {
    borderSize: "2px",
    onClick: () => { },
  };

}
