
import { Button, Text } from "@/components";
import BGradient from "@/components/Wrapper/Panels/BGradient";
import React from "react";


export const Title = ({ _scss }) => {
  const props = childrenProps({});
  return (
    <div className={_scss.title}>
      <Text label="h2" size="medium" fontWeight="400">ENDPOINTS</Text>
      <BGradient className={_scss.add_route} {...props.add_route}>+</BGradient>
      {/* <Button variant="gradient" width="3.5rem" height="3.5rem" padding="0">+</Button> */}
    </div>
  );
};

const childrenProps = ({ }) => {
  return {
    add_route: {
      onClick: () => { },
    },
  };
};
