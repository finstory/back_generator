import React, { useState } from "react";
import scss from "@sass/components/panels/temperature.module.scss";
import { Graphic } from "../Charts/Graphic";

export const Temperatura = (props) => {
  const {
    colorLine = "#2196F3",
    colorTop = "#00C7F2",
    colorBottom = "rgba(0, 198, 242, 0.27)",
    dateList = [],
    valueList = [],
    optionsList = [],
  } = props;

  const renderOption = (optionId) => {
    const selectedOption = optionData.find((option) => option.id === optionId);
    if (selectedOption) {
      return <Graphic {...props} />;
    }
    return <></>;
  };

  return (
    <div className={scss.temperature_graph}>
      <div className={scss.color_option}>
        {optionsList.map((option) => (
          <div key={option.value} className={scss.wrap}>
            <div
              className={scss.circle}
              style={{ backgroundColor: option.color || "" }}
            ></div>
            <span>{option.value}</span>
          </div>
        ))}
      </div>
      <div className={scss.unit_label}>Temperatura - C°</div>
      <div className={scss.date_label}>Días - DD/MM</div>
      <Graphic {...props} />
    </div>
  );
};
