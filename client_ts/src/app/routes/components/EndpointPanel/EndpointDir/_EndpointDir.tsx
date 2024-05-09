
import scss from '@routes/_scss/rotes.module.scss';
import { RouteModuleEditor } from "./RouteModule/__RouteModuleEditor";


export const EndpointDir = () => {
  const props = childrenProps({ scss });

  return (
    <div className={scss.endpoint_dir}>
      <RouteModuleEditor {...props.route_module_editor} />
      {/* 
      {[].map((route) => (
        <RouteModule key={route.module} scss={_scss} route={route} />
      ))} */}
    </div>
  );
};

const childrenProps = ({ scss }) => {
  return {
    route_module_editor: {
      _scss: scss,
      active: true,
      mode: "add",
      moduleName: "",
      setEditMode: () => { },
    },
  };
};
