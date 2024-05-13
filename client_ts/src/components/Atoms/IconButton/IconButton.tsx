import React, { FC } from "react";
import scss from "./icon_button.module.scss";
import images from './../../../../../client/src/assets/images/index';

export type IconsName = "edit" | "delete" | "edit_blue" | "delete_blue";

const iconsUrls = {
  edit_blue: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1712556474/Generator/Icons/icons8-editar-100_sw2jom.png",
  edit: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1712557540/Generator/Icons/icons8-editar-100_1_fe45dg.png",
  delete_blue: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1712556516/Generator/Icons/icons8-basura-100_uyplyl.png",
  delete: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1712557494/Generator/Icons/icons8-basura-100_1_g7gkma.png",
};

export const IconButton: FC<{
  icon: IconsName,
  width?: React.CSSProperties["width"],
  height?: React.CSSProperties["height"],
  style?: React.CSSProperties;
  variant?: "default";
  onClick?: () => void;
}> = ({ style = {}, width = "2rem", height = "1.9rem", variant = "index", onClick, icon }) => {

  return (
    <button
      className={`${scss.default} ${variant ? scss[variant] : null}`}
      style={{ ...style, width, height }}
      onClick={onClick}
    >
      <img src={iconsUrls[icon]} alt="action_icon" />
    </button>
  );
};
