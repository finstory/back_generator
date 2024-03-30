import React, { useState } from "react";
import { useStyleManager } from "../../../../hooks/useStyleManager";

export const PanelSelector = ({
  scss,
  optionsList = [],
  optionSelected,
  setOptionSelected,
}) => {
  const { setActiveStyle } = useStyleManager();
  const handleOptionChange = (option) => {
    setOptionSelected(option);
  };

  return (
    <div
      className={scss.panel_selector}
      style={{ display: optionsList.length > 0 ? "flex" : "none" }}
    >
      {optionsList.map((option) => (
        <button
          key={option.value}
          className={setActiveStyle(
            optionSelected === option.value,
            scss.selected
          )}
          onClick={() => handleOptionChange(option.value)}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};
