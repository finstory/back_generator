import React, { ReactNode } from "react";

interface BorderGradientProps {
  children: ReactNode;
  className: string;
  color?: string;
  borderSize?: string;
  onClick?: () => void;
}

export const BorderGradient = ({ children, color, className, borderSize = "2px", onClick = () => { } }: BorderGradientProps) => {
  return (
    <div
      onClick={onClick}
      className={`border_gradient ${className}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
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
