import { useState } from "react";
import scss from "../../../assets/sass/pages/routes.module.scss";
import useRouteServices from "../../../services/useRouteServices";
import { BorderGradient } from "../../../utilities/BorderGradient";
import { DoubleBorderGradient } from "../../../utilities/DoubleBorderGradient";
import useToast from "../../../hooks/useToast";
import { RouteModule } from "./RouteModule";
import { RouteModuleEditor } from "./RouteModuleEditor";

export const EndpointPanel = () => {
  const {
    route: { endpointList },
  } = useRouteServices();

  const [activeAddRoute, setActiveAddRoute] = useState(false);

  return (
    <DoubleBorderGradient
      effectHeight="51rem"
      effect={true}
      className={scss.routes_panel}
      borderRadius="2rem"
      borderSize="2px"
      borderBetween="2px"
    >
      <div className={scss.panel}>
        <div className={scss.title}>
          <p>ENDPOINTS</p>
          <BorderGradient
            className={scss.add_route}
            borderSize="2px"
            onClick={() => {
              setActiveAddRoute(!activeAddRoute);
            }}
          >
            <p>+</p>
          </BorderGradient>
        </div>

        <div className={scss.endpoint_dir}>
          <RouteModuleEditor scss={scss} active={activeAddRoute} mode={"add"} />

          {endpointList.map((route) => (
            <RouteModule key={route.module} scss={scss} route={route} />
          ))}
        </div>

        {/* <div className={scss.add_route_modal}>
          <div className={scss.module_name}>
            <label>Endpoint Module Name</label>
          </div>
        </div> */}
      </div>
    </DoubleBorderGradient>
  );
};
