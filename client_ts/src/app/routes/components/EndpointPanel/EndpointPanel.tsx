import { useEffect, useState } from "react";
import { Text, IText, DGBorder, Button, IDGBorder } from "@/components";
import scss from "@routes/_scss/endpoint_panel.module.scss";
import { Title } from "./Title/_Title";
import { EndpointDir } from "./EndpointDir/_EndpointDir";
import S from "@/services/_test/injector";


export const EndpointPanel = () => {
  const storeAuth = S.auth.store;
  const stackAuth = S.auth.api;
  const stackUser = S.user.api;

  const props = childrenProps({});

  const action = async () => {
    console.log(storeAuth)
    stackAuth.main();
    stackUser.getAuth();

  }
  useEffect(() => {
    action();
  }, [])


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
