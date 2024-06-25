import React, { FC } from "react";
import { IconButton, Mark, Text } from "@/components";
import { IModule, IRoute } from "@/services/module/_interfaces/module.interface";
import { upFirst } from "@helpers/wordsManager";

interface IProps {
  _scss: CSSModuleClasses;
  module: IModule;
}

export const RouteModule: FC<IProps> = ({ _scss, module }) => {

  return <div className={_scss.module_container}>
    <div className={_scss.module}>
      <div className={_scss.wrap}>

        <Mark cursor="pointer" />
        <Text label="h2" color="primary" cursor="pointer">{module.name.toUpperCase()}</Text>

        <div className={_scss.wrap_editor}>
          <IconButton icon="edit_primary" />
          <IconButton icon="delete_primary" />
        </div>

      </div>

    </div>

    {module.routes.map((route) => (
      <div key={route.id} className={_scss.endpoint}>

        <div className={_scss.wrap}>
          <Mark className={_scss.mark} variant="bar" />

          <Text className={_scss.text} label="p" color="base-off" >
            {route.endpointName.toUpperCase()} -

            <Text className={_scss.text} label="span" color={route.requestType}> {route.requestType.toUpperCase()} </Text>

          </Text>

          <div className={_scss.wrap_editor}>
            <IconButton icon="edit_primary" />
            <IconButton icon="delete_primary" />
          </div>

        </div>
      </div>
    ))}
  </div>;
};
