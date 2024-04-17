import React, { useState } from "react";
import { ModelToEdit } from "./ModelToEdit";
import { useRequestServices } from "../../../services/useRequestServices";

export const DataManager = ({ scss, item, routeModule }) => {
  const [menuSelected, setMenuSelected] = useState("params");
  const [editorModal, setEditorModal] = useState({
    open: false,
    key: "",
    value: "",
    menuSelected: "",
  });
  const switchMenu = (menu) => {
    setMenuSelected(menu);
  };

  const onPressValue = (key, value) => {
    setEditorModal({ open: true, key, value, menuSelected });
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

        {item[menuSelected].map((item) => (
          <div className={scss.prop} key={item.key}>
            <div className={scss.mark}></div>
            <p>{item.key}</p>
            <p onClick={() => onPressValue(item.key, item.value)}>
              {item.value}
            </p>
            <p>{item.type}</p>
          </div>
        ))}

        {/* {menuSelected === "body" &&
          item.body.map((body) => (
            <div className={scss.prop} key={body.key}>
              <div className={scss.mark}></div>
              <p>{body.key}</p>
              <p>{body.value}</p>
              <p>{body.type}</p>
            </div>
          ))} */}
      </div>
    </div>
  );
};
