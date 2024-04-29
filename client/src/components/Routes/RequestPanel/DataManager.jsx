import React, { useEffect, useState } from "react";
import { ModelToEdit } from "./ModelToEdit";
import { useRequestServices } from "../../../services/useRequestServices";
import useRouteServices from "../../../services/useRouteServices";
import useRoutesEndpoint from "../../../endpoints/useRoutesEndpoint";

export const DataManager = ({ scss, item, routeModule }) => {



  const { addControllerTypes, setEndpointTarget, deleteControllerTypes } =
    useRequestServices();
  const [menuSelected, setMenuSelected] = useState("params");
  const [editorModal, setEditorModal] = useState({
    open: false,
    key: "",
    value: "",
    optional: false,
    menuSelected: "",
  });

  const switchMenu = (menu) => {
    setMenuSelected(menu);
  };

  const onPressValue = (key, value, optional, propToEdit) => {
    setEditorModal({
      open: true,
      key,
      value,
      optional,
      menuSelected,
      propToEdit,
    });
  };

  const addProperty = async () => {
    const key =
      `key_${item[menuSelected].length + 1}` +
      Math.random().toString(36).substring(2, 3);
    const newType = {
      prevKey: key,
      key,
      type: "string",
      elementType: "",
      optional: false,
      value: null,
    };

    const newItem = {
      ...item,
      [menuSelected]: [...item[menuSelected], newType],
    };

    await addControllerTypes(
      routeModule,
      item.controllerName,
      menuSelected,
      newType
    );

    setEndpointTarget(newItem);
  };

  const removeProperty = async (key) => {
    await deleteControllerTypes(
      routeModule,
      item.controllerName,
      menuSelected,
      key
    );
    const newItem = {
      ...item,
      [menuSelected]: item[menuSelected].filter((obj) => obj.key !== key),
    };
    setEndpointTarget(newItem);
  };

  return (
    <div className={scss.data_manager}>
      <nav>
        <li
          className={menuSelected === "params" ? scss.active : ""}
          style={
            item.params?.length === 0 ? { color: "var(--off-gray-color)" } : {}
          }
          onClick={() => switchMenu("params")}
        >
          {item.params?.length === 0 && (
            <div className={scss.is_null}>NULL</div>
          )}
          PARAMS
        </li>

        <li
          className={menuSelected === "query" ? scss.active : ""}
          onClick={() => switchMenu("query")}
          style={
            item.query?.length === 0 ? { color: "var(--off-gray-color)" } : {}
          }
        >
          {item.query?.length === 0 && <div className={scss.is_null}>NULL</div>}
          QUERY
        </li>

        <li
          className={menuSelected === "body" ? scss.active : ""}
          onClick={() => switchMenu("body")}
          style={
            item.body?.length === 0 ? { color: "var(--off-gray-color)" } : {}
          }
        >
          {item.body?.length === 0 && <div className={scss.is_null}>NULL</div>}
          BODY
        </li>
      </nav>

      <ModelToEdit
        scss={scss}
        editorModal={editorModal}
        setEditorModal={setEditorModal}
        routeModule={routeModule}
        menuSelected={menuSelected}
        item={item}
      />

      <div className={scss.properties}>
        <div className={scss.header}>
          <div className={scss.add_btn}>
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1712571694/Generator/Icons/icons8-a%C3%B1adir-100_ol1mmi.png"
              alt=""
              onClick={addProperty}
            />
          </div>
          <p>KEY</p>
          <p>VALUE</p>
          <p>TYPE</p>
        </div>
        {item[menuSelected].map((obj) => (
          <div key={obj.id} className={scss.prop}>
            <div className={scss.mark}></div>
            <div className={scss.column}>
              <div
                className={`${scss.optional} ${
                  !obj.optional ? scss.active : ""
                }`}
              >
                ?
              </div>

              <p
                onClick={() =>
                  onPressValue(obj.key, obj.value, obj.optional, "key")
                }
              >
                {obj.key}
              </p>
            </div>
            <div
              className={scss.column}
              onClick={() =>
                onPressValue(obj.key, obj.value, obj.optional, "value")
              }
            >
              <p className={obj.value ? "" : scss.is_null}>
                {obj.value ? obj.value : "NULL"}
              </p>
            </div>

            <div className={`${scss.column} ${scss.column_type}`}>
              <p className={scss[obj.type]}>{obj.type}</p>
            </div>

            <div
              className={scss.remove_btn}
              onClick={() => {
                removeProperty(obj.key);
              }}
            >
              <img
                src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1712557494/Generator/Icons/icons8-basura-100_1_g7gkma.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
