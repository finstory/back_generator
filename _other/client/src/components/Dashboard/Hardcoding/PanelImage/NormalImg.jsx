import React from "react";

export const NormalImg = ({
  url = "https://res.cloudinary.com/die1hnh4p/image/upload/v1710506329/agro/Data_x17ytp.png",
}) => {
  return (
    <div
      style={{
        width: "68rem",
        height: "52rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1.5rem",
        backgroundColor: "var(--white-color)",
      }}
    >
      <img src={url} alt="panel" />
    </div>
  );
};
