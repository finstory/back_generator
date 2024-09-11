
import { useEffect, useState } from "react";
import { RouteModule } from "./RouteModule/__RouteModule";
// import { RouteModuleEditor } from "./RouteModule/__RouteModuleEditor";
import S from "@/_common/services/main.service";
import { moduleSelector } from "@/integrations/redux/slices/module.slice";
import { useRouteRx } from "@/app/route/rxjs/route.rx";
import { RouteModuleEditor } from "./RouteModule/__RouteModuleEditor";
import { useSelector } from "react-redux";
import { RootState } from "@/integrations/redux/store";

export const EndpointDir = ({ _scss }) => {

  const modulesList = useSelector<RootState>(state => state.module.modulesList) as RootState["module"]["modulesList"];
  
  const { routeRx$ } = useRouteRx();
  const moduleEditorOpen = routeRx$.endpointPanel.moduleEditorOpen;

  return (
    <div className={_scss.endpoint_dir}>

      {moduleEditorOpen && <RouteModuleEditor _scss={_scss} />}

      {modulesList.length > 0 && modulesList.map((module) => (
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
