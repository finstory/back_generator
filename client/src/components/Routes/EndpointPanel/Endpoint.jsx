import React, { useState } from "react";
import useRouteServices from "../../../services/useRouteServices";
import { EndpointEditor } from "./EndpointEditor";
import useToast from "./../../../hooks/useToast";

export const Endpoint = ({ scss, item, routeModule }) => {
  const { deleteEndpoint } = useRouteServices();
  const { alertConfirm } = useToast();
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode ? (
        <EndpointEditor
          scss={scss}
          mode={"edit"}
          item={item}
          routeModule={routeModule}
          setEditMode={setEditMode}
        />
      ) : (
        <div key={item.id} className={scss.endpoint}>
          <div className={scss.marker}></div>
          {item.endpoint.toUpperCase()}
          <span> - </span> {item.method.toUpperCase()}
          <div className={scss.action_btn}>
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1712557540/Generator/Icons/icons8-editar-100_1_fe45dg.png"
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
              if (option) deleteEndpoint(item.id, routeModule);
            }}
          >
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1712557494/Generator/Icons/icons8-basura-100_1_g7gkma.png"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};
