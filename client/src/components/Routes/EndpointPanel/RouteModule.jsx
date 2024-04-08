import React, { useState } from "react";
import { Endpoint } from "./Endpoint";
import { RouteModuleEditor } from "./RouteModuleEditor";
import useToast from "../../../hooks/useToast";
import useRouteServices from "../../../services/useRouteServices";
import { EndpointEditor } from "./EndpointEditor";

export const RouteModule = ({ scss, route }) => {
  const { alertConfirm } = useToast();
  const [editMode, setEditMode] = useState(false);
  const [editEndpoint, setEditEndpoint] = useState(false);
  const { deleteRouteModule } = useRouteServices();
  return (
    <div key={route.module} className={scss.module}>
      <div className={scss.module_name}>
        {editMode ? (
          <RouteModuleEditor
            scss={scss}
            mode={"edit"}
            moduleName={route.module}
            setEditMode={setEditMode}
          />
        ) : (
          <>
            <div className={scss.name}>
              <div className={scss.marker}></div>
              <p> {route.module.toUpperCase()}</p>
            </div>
            <div className={scss.action_btn}>
              <img
                src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1712571694/Generator/Icons/icons8-a%C3%B1adir-100_ol1mmi.png"
                alt=""
                onClick={() => setEditEndpoint(!editEndpoint)}
              />
            </div>
            <div className={scss.action_btn}>
              <img
                src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1712556474/Generator/Icons/icons8-editar-100_sw2jom.png"
                alt=""
                onClick={() => setEditMode(!editMode)}
              />
            </div>
            <div
              className={scss.action_btn}
              onClick={async () => {
                const option = await alertConfirm(
                  "Are you sure you want to delete this item?"
                );
                if (option) deleteRouteModule(route.module);
              }}
            >
              <img
                src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1712556516/Generator/Icons/icons8-basura-100_uyplyl.png"
                alt=""
              />
            </div>
          </>
        )}
      </div>

      {editEndpoint && (
        <EndpointEditor
          scss={scss}
          mode={"add"}
          item={{
            endpoint: "/",
            method: "get",
            id: "sd",
          }}
          routeModule={route.module}
          setEditMode={setEditEndpoint}
        />
      )}

      {route.routesList.map((item) => (
        <Endpoint
          key={item.id}
          scss={scss}
          item={item}
          routeModule={route.module}
        />
      ))}
    </div>
  );
};
