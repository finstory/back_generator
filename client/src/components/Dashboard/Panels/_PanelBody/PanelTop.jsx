import React from "react";

export const PanelTop = ({
  scss,
  size = "normal",
  title = "Temperatura",
  subtitle = "medición ambiente",
  description = "",
}) => {
  return (
    <div
      className={scss.panel_top}
      style={{ display: size === "semi_large" ? "none" : "relative" }}
    >
      <div className={scss.box}>
        <div className={scss.panel_icon}>
          <img
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1709923672/Agro/Panel/normal/profile-made-transaction_nkveay.svg"
            alt="panel_icon"
          />
        </div>
        <div className={scss.info}>
          <div className={scss.title}>
            <p> {title}</p>
            <span>{subtitle}</span>
          </div>
          <p className={scss.date}>{description}</p>
        </div>
      </div>

      <div className={scss.box}></div>
    </div>
  );
};
