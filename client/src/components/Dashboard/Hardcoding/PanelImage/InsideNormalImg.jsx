import React from "react";

export const InsideNormalImg = ({
  url = "https://res.cloudinary.com/die1hnh4p/image/upload/v1710506329/agro/Data_x17ytp.png",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      <img style={{}} src={url} alt="panel" />
    </div>
  );
};
