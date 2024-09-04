

import { useRouteRx } from "@/app/route/rxjs/route.rx";
import { Button, Text } from "@/components";
import BGradient from "@/components/Wrapper/Panels/BGradient";
import React from "react";


export const Title = ({ _scss }) => {
  const { routeRx } = useRouteRx();
  const moduleEditorOpen = routeRx.endpointPanel.moduleEditorOpen;
  return (
    <div className={_scss.title}>

      <Text label="h2" size="medium" fontWeight="300">ENDPOINTS</Text>
      <BGradient className={_scss.add_route}
        onClick={() => moduleEditorOpen.set(!moduleEditorOpen.get())}
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
