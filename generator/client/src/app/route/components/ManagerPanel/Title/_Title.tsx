
import S from "@S";
import { Button, Text } from "@/components";
import BGradient from "@/components/Wrapper/Panels/BGradient";
import React from "react";


export const Title = ({ _scss }) => {

  const { toggleModuleEditor } = S.route;

  return (
    <div className={_scss.title}>

      <Text label="h2" size="medium" fontWeight="300" title="Endpoint Name">/ REGISTER</Text>

    </div>
  );

};
