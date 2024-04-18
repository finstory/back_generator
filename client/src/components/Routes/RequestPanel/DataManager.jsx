import React, { useState } from "react";
import { ModelToEdit } from "./ModelToEdit";
import { useRequestServices } from "../../../services/useRequestServices";
import { useManagerText } from "../../../hooks/useManagerText";

export const DataManager = ({ scss, item, routeModule }) => {
  const { firsUpperCase } = useManagerText();
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

  return (
    <div className={scss.data_manager}>
      <nav>
        <li
          className={menuSelected === "params" ? scss.active : ""}
          style={
            item.params.length === 0 ? { color: "var(--off-gray-color)" } : {}
          }
          onClick={() => switchMenu("params")}
        >
          {item.params.length === 0 && <div className={scss.is_null}>NULL</div>}
          PARAMS
        </li>

        <li
          className={menuSelected === "query" ? scss.active : ""}
          onClick={() => switchMenu("query")}
          style={
            item.query.length === 0 ? { color: "var(--off-gray-color)" } : {}
          }
        >
          {item.query.length === 0 && <div className={scss.is_null}>NULL</div>}
          QUERY
        </li>

        <li
          className={menuSelected === "body" ? scss.active : ""}
          onClick={() => switchMenu("body")}
          style={
            item.body.length === 0 ? { color: "var(--off-gray-color)" } : {}
          }
        >
          {item.body.length === 0 && <div className={scss.is_null}>NULL</div>}
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
          <p>KEY</p>
          <p>VALUE</p>
          <p>TYPE</p>
        </div>

        {item[menuSelected].map((obj) => (
          <div key={obj.id} className={scss.prop}>
            <div className={scss.mark}></div>
            <div
              className={scss.column}
              onClick={() =>
                onPressValue(obj.key, obj.value, obj.optional, "key")
              }
            >
              <p>{obj.key}</p>
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
              <div
                className={`${scss.optional} ${
                  !obj.optional ? scss.active : ""
                }`}
              >
                ?
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
