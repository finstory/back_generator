import React from "react";
import useRouteServices from "../../../services/useRouteServices";
import { useForm } from "../../../hooks/useForm";
import useToast from "../../../hooks/useToast";
import { useManagerText } from "../../../hooks/useManagerText";

export const RouteModuleEditor = ({
  scss,
  active = true,
  mode = "add",
  moduleName,
  setEditMode = () => {},
}) => {
  const { printAlert } = useToast();
  const { createRouteModule, editRouteModule } = useRouteServices();
  const { firsUpperCase } = useManagerText();
  const { values, handleInputChange, reset } = useForm({
    route_module_name: mode === "edit" ? moduleName : "",
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const name = values.route_module_name.toLowerCase();

    if (/\d/.test(name)) {
      printAlert(`'${name}'` + " have numbers!", "alert");
    } else if (name.length < 3) {
      printAlert(`'${name}'` + " must have at least 3 characters!", "alert");
    } else {
      if (mode === "add") {
        createRouteModule(name);
        reset();
      } else {
        editRouteModule(moduleName, name);
      }
      setEditMode(false);
    }
  };

  return (
    <div
      className={`${scss.module} ${scss.module_edit}`}
      style={{
        display: active ? "flex" : "none",
        borderBottom: mode === "add" ? "1px solid var(--gray-color)" : "none",
      }}
    >
      <form onSubmit={onHandleSubmit} className={scss.module_edit}>
        <div className={scss.marker}></div>
        <div className={scss.input_wrap}>
          <input
            type="text"
            name="route_module_name"
            placeholder={
              mode === "add" ? "Route Module Name" : firsUpperCase(moduleName)
            }
            onChange={handleInputChange}
            value={values.route_module_name}
          />
        </div>
        <button className={scss.save_btn} type="submit">
          {mode === "add" ? "Add" : "Edit"}
        </button>
      </form>
    </div>
  );
};
