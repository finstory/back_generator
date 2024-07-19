
import { useState } from "react";
import { RouteModule } from "./RouteModule/__RouteModule";
import { RouteModuleEditor } from "./RouteModule/__RouteModuleEditor";
import S from "@S";

export const EndpointDir = ({ _scss }) => {

  const { moduleState: { modulesList } } = S.module;
  const { routeState: { endpointPanel: { moduleEditorOpen } } } = S.route;
  const props = childrenProps({});

  return (
    <div className={_scss.endpoint_dir}>

      {moduleEditorOpen && <RouteModuleEditor _scss={_scss} />}

      {modulesList.map((module) => (
        <RouteModule key={module.name} _scss={_scss} module={module} />
      ))}

    </div>
  );
};

const childrenProps = ({ }) => {
  return {
    route_module_editor: {
      active: true,
      mode: "add",
      moduleName: "",
      setEditMode: () => { },
    },
  };
};
