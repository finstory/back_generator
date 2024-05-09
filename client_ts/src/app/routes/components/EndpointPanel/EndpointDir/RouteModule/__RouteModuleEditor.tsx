import React from "react";

interface IProps {
  _scss: any;
  active?: boolean;
  mode?: string;
  moduleName?: string;
  setEditMode?: () => void;
}

export const RouteModuleEditor = (
  { _scss, active = true, mode = "add", moduleName = "", setEditMode = () => { } }
    : IProps) => {
      return (
        <div
          className={`${_scss.module} ${_scss.module_edit}`}
        >
          <form className={_scss.module_edit}>
            <div className={_scss.marker} />
            <div className={_scss.input_wrap}>
              <input
                type="text"
                name="route_module_name"
              // onChange={handleInputChange}
              // value={values.route_module_name}
              />
            </div>
            <button className={_scss.save_btn} type="submit">
              {mode === "add" ? "Add" : "Edit"}
            </button>
          </form>
        </div>
      );
};

const childrenProps = ({ scss }) => {
  return {};
};
