import React from "react";
import scss from "@sass/components/panels/panels.module.scss";
export const RealTimeSmall = ({
  title = "",
  value = 2.3,
  measure = "",
  icon = "",
}) => {
  return (
    <div className={scss.small_panel}>
      <div className={scss.info}>
        <p className={scss.title}>{title}</p>
        <p className={scss.value}>
          {value} {measure}
        </p>
      </div>
      <div className={scss.icon}>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};
