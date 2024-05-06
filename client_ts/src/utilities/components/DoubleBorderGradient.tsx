import React, { ReactNode, useEffect, useRef, useState } from "react";

interface DoubleBorderGradientProps {
  children: ReactNode;
  className: string;
  color?: string;
  borderSize?: string;
  borderRadius?: string;
  borderBetween?: string;
  effectHeight?: string;
  effect?: boolean;
}

export const DoubleBorderGradient = ({
  children,
  className,
  color,
  borderSize = "4px",
  borderRadius = "10px",
  borderBetween = "2px",
  effectHeight = "200rem",
  effect = false,
}: DoubleBorderGradientProps) => {
  return (
    <div
      className={`border_gradient ${className}`}
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignContent: "center",
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
          backgroundColor: "#2c9738",
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
            alignContent: "center",
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
