import React, { FC, useState } from "react";
import { IconButton, Mark, Text } from "@/components";
import S from "@/_common/services/main.service";
import Endpoint from "../Endpoint/__Endpoint";
import { IModule } from "@/app/module/_interfaces/module.interface";
import RenameModule from "./__RenameModule";
import AddEndpoint from "../Endpoint/___AddEndpoint";

interface IProps {
  _scss: CSSModuleClasses;
  module: IModule;
}

export const RouteModule: FC<IProps> = ({ _scss, module }) => {
  const { removeModule } = S.module;
  const [renameModeActive, setRenameModeActive] = useState<boolean>(false);
  const [addRouteActive, setAddRouteActive] = useState(false);

  return <div className={_scss.module_container}>

    {!renameModeActive ?
      <div className={_scss.module}>
        <div className={_scss.wrap}>
          <Mark cursor="pointer" />
          <Text label="h2" color="primary" cursor="pointer">
            {module.name.toUpperCase()}
          </Text>

          <div className={_scss.wrap_editor}>
            <IconButton icon="add_primary" onClick={() => { setAddRouteActive(true) }} />
            <IconButton icon="delete_primary" onClick={() => { removeModule(module.name) }} />
          </div>

        </div>

      </div>
      : <RenameModule _scss={_scss} moduleName={module.name} active={setRenameModeActive} />
    }

    {addRouteActive && <AddEndpoint _scss={_scss} moduleName={module.name} active={setAddRouteActive} />}

    {module.routes.length > 0 && module.routes.map((route) => (
      <Endpoint _scss={_scss} moduleName={module.name} route={route} key={route.id} />
    ))}

  </div>;
};
