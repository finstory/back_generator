import React from "react";

interface Props {
  scss: CSSModuleClasses;
  route: string;
}

export const RouteModule = ({ scss, route }: Props) => {
  console.log(scss, route);
  return <div>RouteModule</div>;
};
