import React from "react";
import useRouteServices from "../../../services/useRouteServices";
import { useForm } from "../../../hooks/useForm";
import useToast from "../../../hooks/useToast";
import { useManagerText } from "../../../hooks/useManagerText";

export const EndpointEditor = ({
  scss,
  active = true,
  mode = "edit",
  item,
  routeModule,
  setEditMode = () => {},
}) => {
  const { printAlert } = useToast();
  const { addEndpoint, editEndpoint } = useRouteServices();
  const { firsUpperCase } = useManagerText();
  const { values, handleInputChange, reset } = useForm({
    route_name: item.endpoint ? item.endpoint : "",
    request_type: item.method ? item.method : "get",
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (values.route_module_name === "") return;
    const name = values.route_name.toLowerCase();

    if (/\d/.test(name)) {
      printAlert(`'${name}'` + " have numbers!", "alert");
    } else {
      if (mode === "edit") {
        editEndpoint(
          item.id,
          routeModule,
          values.route_name,
          values.request_type
        );
      } else {
        addEndpoint(routeModule, values.route_name, values.request_type);
      }
      setEditMode(false);
    }
  };

  return (
    <form
      onSubmit={onHandleSubmit}
      className={scss.endpoint_editor}
      style={{
        display: active ? "flex" : "none",
      }}
    >
      <div className={scss.marker}></div>

      <div className={scss.input_wrap}>
        <input
          type="text"
          name="route_name"
          placeholder={
            mode === "add" ? "Route Module Name" : firsUpperCase(item.endpoint)
          }
          onChange={handleInputChange}
          value={values.route_name}
        />
      </div>

      <select
        className={scss.request_selector}
        name="request_type"
        id={item ? item.id : 23}
        onChange={handleInputChange}
        value={values.request_type}
      >
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="put">PUT</option>
        <option value="patch">PATCH</option>
        <option value="delete">DELETE</option>
      </select>

      <button className={scss.save_btn} type="submit">
        {mode === "add" ? "Add" : "Edit"}
      </button>
    </form>
  );
};
