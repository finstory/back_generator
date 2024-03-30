import React, { useState } from "react";
import scss from "@sass/components/panels/light_sensor.module.scss";

export const SensorDeLuz = ({
  id = 4,
  name = "Sensor 3",
  activeRange = "",
  value = "50.32",
  unit = "Lúmenes",
  icon = "",
  date = "",
}) => {
  return (
    <div className={scss.item}>
      <div className={scss.wrap}>
        <div className={scss.icon}>
          <img src={icon} alt="Sensor 1" />
        </div>
        <div className={scss.info}>
          <p className={scss.name}>{name}</p>
          <p className={scss.active_range}> {activeRange} {date} </p>
        </div>
      </div>
      <div className={scss.value}>
        {value} <span>{unit}</span>
      </div>
    </div>
  );
};
