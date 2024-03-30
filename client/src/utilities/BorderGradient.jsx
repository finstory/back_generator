import React from "react";

export const BorderGradient = ({
  children,
  color,
  className,
  borderSize = "2px",
}) => {
  return (
    <div
    className={`border_gradient ${className}`}
    style={{
      display: "flex",
      position: "relative",
      justifyContent: "center",
      flexDirection: "center",
    }}
    >
      <div
        className={`children ${className}`}
        style={{
    
          width: `calc(100% - ${borderSize})`,
          height: `calc(100% - ${borderSize})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
