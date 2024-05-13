import React, { FC } from "react";
import { IconButton, Mark, Text } from "@/components";

interface IProps {
  _scss: CSSModuleClasses;
  route?: object;
}

export const RouteModule: FC<IProps> = ({ _scss, route }) => {

  return <div className={_scss.module_container}>
    <div className={_scss.module}>
      <Mark cursor="pointer" />
      <Text label="h2" color="primary" cursor="pointer">AUTH</Text>
      <div className={_scss.wrap_editor}>
        <IconButton icon="edit_blue" />
        <IconButton icon="delete_blue" />
      </div>
    </div>
    <div className={_scss.endpoint}>
      <div className={_scss.wrap}>
        <Mark className={_scss.mark} variant="rhombus" />
        <Text className={_scss.text} label="p" color="base" >
          / -
          <Text className={_scss.text} label="span" color="post"> POST </Text>
        </Text>
      </div>
      <div className={_scss.wrap_editor}>
        <IconButton icon="edit" />
        <IconButton icon="delete" />
      </div>
    </div>
    <div className={_scss.endpoint}>
      <div className={_scss.wrap}>
        <Mark className={_scss.mark} variant="rhombus" />
        <Text className={_scss.text} label="p" color="base" >
          /CREATE -
          <Text className={_scss.text} label="span" color="delete"> DELETE </Text>
        </Text>
      </div>
    </div>
  </div>;
};
