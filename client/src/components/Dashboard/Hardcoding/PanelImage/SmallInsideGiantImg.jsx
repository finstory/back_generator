import React from "react";

export const SmallInsideGiantImg = ({
  url = "https://res.cloudinary.com/die1hnh4p/image/upload/v1710506329/agro/Data_x17ytp.png",
}) => {
  return (
    <div
      style={{
        width: "34rem",
        height: "40rem",
        backgroundColor: "red",
      }}
    >
      <img src={url} alt="panel" />
    </div>
  );
};
