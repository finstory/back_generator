
import S from "@/_common/services/main.service";
import { Button, Text } from "@/components";
import BGradient from "@/components/Wrapper/Panels/BGradient";
import React from "react";


export const Title = ({ _scss }) => {
  const { toggleModuleEditor } = S.route;
  const props = childrenProps({ toggleModuleEditor });
  return (
    <div className={_scss.title}>

      <Text label="h2" size="medium" fontWeight="300">ENDPOINTS</Text>
      <BGradient className={_scss.add_route} {...props.add_route}
      >+</BGradient>

    </div>
  );
};

const childrenProps = ({ toggleModuleEditor }) => {
  return {
    add_route: {
      onClick: () => toggleModuleEditor(),
    },
  };
};
