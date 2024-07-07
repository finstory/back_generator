import React, { FC, useState } from "react";
import { IconButton, Mark, Text } from "@/components";
import { IModule, IRoute } from "@/services/module/_interfaces/module.interface";
import S from "@S";
import RenameModule from "./__RenameModule";
import Endpoint from "../Endpoint/__Endpoint";

interface IProps {
  _scss: CSSModuleClasses;
  module: IModule;
}

export const RouteModule: FC<IProps> = ({ _scss, module }) => {
  const { removeModule } = S.module;
  const [renameModeActive, setRenameModeActive] = useState<boolean>(false);
 
 return <div className={_scss.module_container}>

    {renameModeActive ?
      <RenameModule _scss={_scss} moduleName={module.name} active={setRenameModeActive} />
      :
      <div className={_scss.module}>
        <div className={_scss.wrap}>

          <Mark cursor="pointer" />
          <Text label="h2" color="primary" cursor="pointer">
            {module.name.toUpperCase()}
          </Text>

          <div className={_scss.wrap_editor}>
            <IconButton icon="edit_primary" onClick={() => { setRenameModeActive(true) }} />
            <IconButton icon="delete_primary" onClick={() => { removeModule(module.name) }} />
          </div>

        </div>

      </div>
    }


    {module.routes.length > 0 && module.routes.map((route) => (
      <Endpoint _scss={_scss} route={route} key={route.id} />
    ))}

  </div>;
};
