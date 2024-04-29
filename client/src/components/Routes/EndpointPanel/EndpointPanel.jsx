import { useEffect, useState } from "react";
import scss from "../../../assets/sass/pages/routes.module.scss";
import useRouteServices from "../../../services/useRouteServices";
import { BorderGradient } from "../../../utilities/BorderGradient";
import { DoubleBorderGradient } from "../../../utilities/DoubleBorderGradient";
import { RouteModuleEditor, RouteModule } from "./_index";
import { useRequestServices } from "../../../services/useRequestServices";

export const EndpointPanel = () => {
  const {
    route: { endpoint_list },
  } = useRouteServices();
  const { setRouteModuleTarget, setEndpointTarget } = useRequestServices;

  const [activeAddRoute, setActiveAddRoute] = useState(false);

  useEffect(() => {
    if (endpoint_list.length === 0 || typeof endpoint_list === "object") return;
    {
      setRouteModuleTarget(endpoint_list[0].module);
      setEndpointTarget(endpoint_list[0].routesList[0]);
    }
  }, [endpoint_list]);

  return (
    <DoubleBorderGradient
      effectHeight="51rem"
      effect={true}
      className={scss.endpoint_panel}
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
          <RouteModuleEditor
            scss={scss}
            active={activeAddRoute}
            mode={"add"}
            setEditMode={setActiveAddRoute}
          />

          {endpoint_list.map((route) => (
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
