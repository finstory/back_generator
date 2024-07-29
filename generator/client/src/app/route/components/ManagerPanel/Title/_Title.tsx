
import S from "@S";
import { Button, Text } from "@/components";
import BGradient from "@/components/Wrapper/Panels/BGradient";
import React from "react";


export const Title = ({ _scss, moduleName, endpointName }) => {

  const { toggleModuleEditor } = S.route;
  const title = `/${moduleName}${endpointName === "/" ? "" : endpointName}`.toUpperCase();
  return (
    <div className={_scss.title}>

      <Text label="h2" size="medium" fontWeight="300" title="Endpoint Name">{title}</Text>

    </div>
  );

};
