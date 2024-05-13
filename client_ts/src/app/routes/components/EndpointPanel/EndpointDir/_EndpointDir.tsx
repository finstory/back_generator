import { RouteModule } from "./RouteModule/__RouteModule";
import { RouteModuleEditor } from "./RouteModule/__RouteModuleEditor";


export const EndpointDir = ({ _scss }) => {
  const props = childrenProps({});

  return (
    <div className={_scss.endpoint_dir}>
      <RouteModuleEditor _scss={_scss} />
      <RouteModule _scss={_scss} />
      {/* 
      {[].map((route) => (
        <RouteModule key={route.module} scss={_scss} route={route} />
      ))} */}
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
