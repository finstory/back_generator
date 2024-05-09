
import BGradient from "@/components/Wrapper/Panels/BGradient";
import React from "react";


export const Title = ({ _scss }) => {
  const props = childrenProps({});
  return (
    <div className={_scss.title}>
      <p>ENDPOINTS</p>

      <BGradient className={_scss.add_route} {...props.add_route}>
        <p>+</p>
      </BGradient>
    </div>
  );
};

const childrenProps = ({ }) => {
  return {
    add_route: {
      borderSize: "2px",
      onClick: () => { },
    },
  };
};
