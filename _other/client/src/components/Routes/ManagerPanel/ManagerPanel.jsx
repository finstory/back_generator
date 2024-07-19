import React from "react";
import { DoubleBorderGradient } from "../../../utilities/DoubleBorderGradient";
import scss from "../../../assets/sass/pages/routes.module.scss";


export const ManagerPanel = () => {

  return (
    <DoubleBorderGradient
      effectHeight="51rem"
      effect={true}
      className={scss.manager_panel}
      borderRadius="2rem"
      borderSize="2px"
      borderBetween="2px"
    >
      <div className={scss.panel}>
        {/* <div className={scss.title}>
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
    </div> */}
      </div>
    </DoubleBorderGradient>
  );
};
