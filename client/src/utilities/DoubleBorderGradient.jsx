import React from "react";

export const DoubleBorderGradient = ({
  children,
  color,
  className,
  borderSize = "4px",
  borderRadius = "10px",
  borderBetween = "4px",
  effectHeight = "200rem",
  effect = false,
}) => {
  return (
    <div
      className={`border_gradient ${className}`}
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        flexDirection: "center",
        borderRadius,
        overflow: "hidden",
      }}
    >
      <div
        className={`children ${className}`}
        style={{
          width: `calc(100% - ${borderSize})`,
          height: `calc(100% - ${borderSize})`,
          padding: borderBetween,
          borderRadius,
          animation: effect ? "padding 4s infinite" : "",
        }}
      >
        {effect && (
          <div
            className="around_brightness"
            style={{ height: effectHeight }}
          ></div>
        )}
        <div
          className={`border_gradient ${className}`}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            flexDirection: "center",
            borderRadius: `calc(${borderRadius} - 3px)`,
          }}
        >
          <div
            className={`children ${className}`}
            style={{
              width: `calc(100% - ${borderSize})`,
              height: `calc(100% - ${borderSize})`,
              borderRadius: `calc(${borderRadius} - 3px)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};