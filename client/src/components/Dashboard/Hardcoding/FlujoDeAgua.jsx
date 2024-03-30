import React from "react";

export const FlujoDeAgua = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="water_container">
        <img
          style={{ display: "relative" }}
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710460668/Agro/Panel/water/Frame_arwtyy.png"
          alt="Flujo de Agua"
        />
        <div className="pin">100% Agua</div>
      </div>
      <div className="water_container">
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710460737/Agro/Panel/water/2323_x73kuh.png"
          alt="Flujo de Agua"
        />
        <div className="pin">75% Agua</div>
      </div>
      <div className="water_container">
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710460738/Agro/Panel/water/2323_1_v36uev.png"
          alt="Flujo de Agua"
        />
        <div className="pin">36% Agua</div>
      </div>
    </div>
  );
};
