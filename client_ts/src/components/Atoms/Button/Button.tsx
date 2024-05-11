import React, { FC } from 'react';
import scss from './border_button.module.scss';

export const Button: FC<{
  style?: React.CSSProperties
  children: React.ReactNode,
  variant?: "request" | "default"
  onClick?: () => void;
}> = ({ children, style, variant = "index", onClick }) => {
  return (
    <button
      className={`${scss.index} ${variant ? scss[variant] : null}`}
      style={style}
      onClick={onClick}>
      {children}
    </button>
  )
}

