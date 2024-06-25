import React, { ReactNode } from "react";

export interface BGradientProps {
  children: ReactNode;
  className: string;
  color?: string;
  borderSize?: string;
  onClick?: () => void;
}

export const BGradient = ({ children, color, className, borderSize = "2px", onClick = () => { } }: BGradientProps) => {
  return (
    <div
      onClick={onClick}
      className={`${className}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
      >
      <div
        className={`children`}
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
export default BGradient;