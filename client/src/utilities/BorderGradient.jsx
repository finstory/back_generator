import React from "react";

export const BorderGradient = ({
  children,
  color,
  className,
  borderSize = "2px",
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`border_gradient ${className}`}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "center",
      }}
    >
      <div
        className={`children ${className}`}
        style={{
          right: "auto",
          left: "auto",
          top: "auto",
          bottom: "auto",
          width: `calc(100% - ${borderSize})`,
          height: `calc(100% - ${borderSize})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
