import React, { useEffect, useRef, useState } from "react";

export const ButtonGradient = ({
  children,
  color,
  className,
  borderRadius = "1rem",
  borderSize = "2px",
}) => {
  const divRef = useRef(null);

  const [buttonSize, setButtonSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.getBoundingClientRect().width;
      const height = divRef.current.getBoundingClientRect().height;
      setButtonSize({
        width,
        height,
      });
    }
  }, []);
  // console.log(buttonSize)
  return (
    <div
      className={`${className} border_gradient`}
      style={{
        width: `${Math.round(buttonSize.width + 4)}px`,
        height: `${Math.round(buttonSize.height + 4)}px`,
        borderRadius,
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={`${className}`}
        ref={divRef}
        style={{
          width: buttonSize.width
            ? `${Math.round(buttonSize.width)}px`
            : "auto",
          height: buttonSize.height
            ? `${Math.round(buttonSize.height)}px`
            : "auto",
          whiteSpace: "nowrap",
          borderRadius: `calc(${borderRadius} - 1px)`,
          position: "absolute",
          zIndex: 21,
        }}
      >
        {children}
      </div>
    </div>
  );
};
