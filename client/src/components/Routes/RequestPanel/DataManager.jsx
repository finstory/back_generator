import React, { useState } from "react";

export const DataManager = ({ scss, item }) => {
  const [menuSelected, setMenuSelected] = useState("params");

  const switchMenu = (menu) => {
    setMenuSelected(menu);
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

      <div className={scss.properties}>
        {menuSelected === "params" || menuSelected === "query" ? (
          <>
            <div className={scss.header}>
              <p style={{ width: "50%" }}>KEY</p>
              <p style={{ width: "50%" }}>VALUE</p>
            </div>

            {menuSelected === "params" ? (
              <>
                {item.params.map((params) => (
                  <div className={scss.prop} key={params.key}>
                    <div className={scss.mark}></div>
                    <p style={{ width: "50%" }}>{params.key}</p>
                    <p style={{ width: "50%" }}>{params.value}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                {item.query.map((query) => (
                  <div className={scss.prop} key={query.key}>
                    <div className={scss.mark}></div>
                    <p style={{ width: "50%" }}>{query.key}</p>
                    <p style={{ width: "50%" }}>{query.value}</p>
                  </div>
                ))}
              </>
            )}
          </>
        ) : (
          <div className={scss.header}>
            <p>KEY</p>
            <p>VALUE</p>
            <p>TYPE</p>
          </div>
        )}

        {menuSelected === "body" &&
          item.body.map((body) => (
            <div className={scss.prop} key={body.key}>
              <div className={scss.mark}></div>
              <p>{body.key}</p>
              <p>{body.value}</p>
              <p>{body.type}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
